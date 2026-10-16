import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p00vhgb_c.css';
import '../../css/c/c25pz6-0h.css';
import '../../css/g/g47p4b7he.css';
import '../../css/h/hz4-vbbjh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXEmuQbsG)" class="p00vhgb_c"><path class="c25pz6-0h"/><path class="g47p4b7he"/></g><defs><clipPath id="SVGXEmuQbsG"><rect class="hz4-vbbjh"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:databasus",
	});
}

export default Component;
