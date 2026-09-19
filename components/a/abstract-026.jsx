import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/selg7tbbx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="selg7tbbx"/>`,
		"fallback": "game-icons:abstract-026",
	});
}

export default Component;
