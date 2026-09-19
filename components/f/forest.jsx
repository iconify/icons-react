import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4l03cc6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4l03cc6f"/>`,
		"fallback": "game-icons:forest",
	});
}

export default Component;
