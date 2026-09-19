import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qm9zmwesg.css';
import '../../css/b/btkw-59hw.css';
import '../../css/c/ck4bgcbho.css';
import '../../css/f/f_-5s2tne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qm9zmwesg"/><path class="btkw-59hw"/><path class="ck4bgcbho"/><path class="f_-5s2tne"/></g>`,
		"fallback": "hugeicons:chart-down",
	});
}

export default Component;
