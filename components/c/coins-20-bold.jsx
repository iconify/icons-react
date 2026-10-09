import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlxpyqbgk.css';
import '../../css/u/umey9qmui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlxpyqbgk"/><path class="umey9qmui"/>`,
		"fallback": "energy-icons:coins-20-bold",
	});
}

export default Component;
