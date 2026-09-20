import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn74o912v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn74o912v"/>`,
		"fallback": "mdi:alpha-v-box-outline",
	});
}

export default Component;
