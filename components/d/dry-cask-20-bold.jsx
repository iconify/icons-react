import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8tgbj8rv.css';
import '../../css/g/glfmzd9iy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8tgbj8rv"/><path class="glfmzd9iy"/>`,
		"fallback": "energy-icons:dry-cask-20-bold",
	});
}

export default Component;
