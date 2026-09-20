import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2eijs4lq.css';
import '../../css/d/dfeserbvh.css';
import '../../css/z/zg0xv8bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2eijs4lq"/><path class="dfeserbvh"/><path class="zg0xv8bfh"/>`,
		"fallback": "streamline-ultimate:arrow-double-down-1-bold",
	});
}

export default Component;
