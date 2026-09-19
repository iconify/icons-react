import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7wwkf7up.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7wwkf7up"/>`,
		"fallback": "game-icons:abstract-070",
	});
}

export default Component;
