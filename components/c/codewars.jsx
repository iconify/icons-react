import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofk5kdpol.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofk5kdpol"/>`,
		"fallback": "devicon:codewars",
	});
}

export default Component;
