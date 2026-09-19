import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/imlg3t0iy.css';
import '../../css/w/wzfz2kbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="imlg3t0iy"/><path class="wzfz2kbze"/></g>`,
		"fallback": "hugeicons:ai-hd-resolution",
	});
}

export default Component;
