import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3x57yb9r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3x57yb9r"/>`,
		"fallback": "icons8:color-dropper",
	});
}

export default Component;
