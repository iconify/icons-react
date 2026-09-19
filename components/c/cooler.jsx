import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd87p4iod.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd87p4iod"/>`,
		"fallback": "game-icons:cooler",
	});
}

export default Component;
