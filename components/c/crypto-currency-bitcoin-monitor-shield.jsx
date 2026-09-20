import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/la84seb5a.css';
import '../../css/z/zynaom_lk.css';
import '../../css/h/ho6pl981a.css';
import '../../css/o/ofkb1rbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="la84seb5a"/><path class="zynaom_lk"/><path class="ho6pl981a"/><path class="ofkb1rbyw"/></g>`,
		"fallback": "streamline-freehand:crypto-currency-bitcoin-monitor-shield",
	});
}

export default Component;
