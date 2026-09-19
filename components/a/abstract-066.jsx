import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8e6qxsws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8e6qxsws"/>`,
		"fallback": "game-icons:abstract-066",
	});
}

export default Component;
