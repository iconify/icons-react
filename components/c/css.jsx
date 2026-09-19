import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd3-ei29r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd3-ei29r"/>`,
		"fallback": "devicon-plain:css",
	});
}

export default Component;
