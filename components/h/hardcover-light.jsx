import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhpm9o8vk.css';
import '../../css/k/k4v90z5go.css';
import '../../css/h/h32mt3b3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhpm9o8vk"/><path class="k4v90z5go"/><path class="h32mt3b3t"/>`,
		"fallback": "selfhst:hardcover-light",
	});
}

export default Component;
