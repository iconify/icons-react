import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5on4pbsr.css';
import '../../css/c/cmfrsh3gh.css';
import '../../css/u/u6s9fpyyj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGUQHBWbhM)"><path class="u5on4pbsr"/><path class="cmfrsh3gh"/></g><defs><clipPath id="SVGUQHBWbhM"><path class="u6s9fpyyj"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:acrobat-reader-grayscale-app-icon",
	});
}

export default Component;
