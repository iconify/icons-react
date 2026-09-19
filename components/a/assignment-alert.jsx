import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db98s4ozf.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db98s4ozf"/>`,
		"fallback": "zmdi:assignment-alert",
	});
}

export default Component;
