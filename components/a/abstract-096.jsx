import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccrh14qgf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccrh14qgf"/>`,
		"fallback": "game-icons:abstract-096",
	});
}

export default Component;
