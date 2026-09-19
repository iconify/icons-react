import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c03wmo-vk.css';
import '../../css/q/q70axjbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c03wmo-vk"/><path class="q70axjbaw"/></g>`,
		"fallback": "hugeicons:cuboid",
	});
}

export default Component;
