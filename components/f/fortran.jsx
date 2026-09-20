import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihvg17u1z.css';
import '../../css/u/unn2f711n.css';
import '../../css/w/wly120bjt.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXA3UTcxh)"><path class="ihvg17u1z"/><path class="unn2f711n"/></g><defs><clipPath id="SVGXA3UTcxh"><path class="wly120bjt"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:fortran",
	});
}

export default Component;
