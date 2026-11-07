import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_z3u7nyx.css';
import '../../css/w/whtgogiyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_z3u7nyx"/><path class="whtgogiyj"/>`,
		"fallback": "solar:brackets-bold",
	});
}

export default Component;
