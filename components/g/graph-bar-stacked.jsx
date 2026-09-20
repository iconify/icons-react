import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlynum9nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlynum9nh"/>`,
		"fallback": "mdi:graph-bar-stacked",
	});
}

export default Component;
