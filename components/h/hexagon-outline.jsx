import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npopgqbur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npopgqbur"/>`,
		"fallback": "carbon:hexagon-outline",
	});
}

export default Component;
