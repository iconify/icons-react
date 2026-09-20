import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjshqv_ue.css';
import '../../css/w/w9wohmbtb.css';
import '../../css/z/zh1wv6ran.css';
import '../../css/a/axba5-bco.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjshqv_ue"/><path class="w9wohmbtb"/><path class="zh1wv6ran"/><path class="axba5-bco"/></g>`,
		"fallback": "streamline-color:dropbox",
	});
}

export default Component;
