import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oppqazbbu.css';
import '../../css/f/fzzh5pb0c.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGbZii27FA)" clip-rule="evenodd" class="oppqazbbu"><path class="fzzh5pb0c"/></g><defs><clipPath id="SVGbZii27FA"><path class="i72psgb8a"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:formance-dark",
	});
}

export default Component;
