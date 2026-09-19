import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abw90sbyu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abw90sbyu"/>`,
		"fallback": "devicon-plain:cmake",
	});
}

export default Component;
