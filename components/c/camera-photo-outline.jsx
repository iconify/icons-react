import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y91k6ybzh.css';
import '../../css/k/ktu665dou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y91k6ybzh"/><path class="ktu665dou"/></g>`,
		"fallback": "flowbite:camera-photo-outline",
	});
}

export default Component;
