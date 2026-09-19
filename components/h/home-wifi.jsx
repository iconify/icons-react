import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h6e57hbmh.css';
import '../../css/w/w12s6pbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h6e57hbmh"/><path class="w12s6pbwc"/></g>`,
		"fallback": "hugeicons:home-wifi",
	});
}

export default Component;
