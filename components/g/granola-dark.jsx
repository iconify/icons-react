import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wycjhibbk.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfrg1kboe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG8d5ufbRH" class="wycjhibbk"/></defs><g class="ft5dv1b6b"><g clip-path="url(#SVGtjtJ3cUn)"><mask id="SVGaIib6BVP" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><use href="#SVG8d5ufbRH"/></mask><g mask="url(#SVGaIib6BVP)"><path class="lfrg1kboe"/></g></g><defs><clipPath id="SVGtjtJ3cUn"><use href="#SVG8d5ufbRH"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:granola-dark",
	});
}

export default Component;
