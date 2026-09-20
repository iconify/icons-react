import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h-soobbek.css';
import '../../css/t/t6s08ybyj.css';
import '../../css/w/w8qthx5fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h-soobbek"/><path class="t6s08ybyj"/><path class="w8qthx5fq"/></g>`,
		"fallback": "streamline-freehand:app-window-user",
	});
}

export default Component;
