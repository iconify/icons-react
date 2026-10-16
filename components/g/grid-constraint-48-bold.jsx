import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5ew6wg8k.css';
import '../../css/c/clhq3_b4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5ew6wg8k"/><path class="clhq3_b4k"/>`,
		"fallback": "energy-icons:grid-constraint-48-bold",
	});
}

export default Component;
