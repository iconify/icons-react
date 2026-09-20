import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zxbovwbaz.css';
import '../../css/k/kcs9n2b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zxbovwbaz"/><path class="kcs9n2b-i"/></g>`,
		"fallback": "streamline-freehand:crypto-currency-bitcoin-graph-increase",
	});
}

export default Component;
