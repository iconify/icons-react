import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoqv9k94x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoqv9k94x"/>`,
		"fallback": "game-icons:camel",
	});
}

export default Component;
