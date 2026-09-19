import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibhn1269f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibhn1269f"/>`,
		"fallback": "game-icons:abstract-076",
	});
}

export default Component;
