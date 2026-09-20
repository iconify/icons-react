import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t68lxlbad.css';
import '../../css/b/b573bnbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGveGyGdGC)"><path class="t68lxlbad"/></g><defs><clipPath id="SVGveGyGdGC"><path class="b573bnbic"/></clipPath></defs></g>`,
		"fallback": "mage:figma",
	});
}

export default Component;
