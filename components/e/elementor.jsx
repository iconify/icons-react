import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fx54jrb3b.css';
import '../../css/v/v4we60c2i.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGtGRvv7uU)"><path class="fx54jrb3b"/></g><defs><clipPath id="SVGtGRvv7uU"><path class="v4we60c2i"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:elementor",
	});
}

export default Component;
