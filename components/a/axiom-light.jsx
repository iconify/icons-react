import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zamxrp19a.css';
import '../../css/r/rvmink5sm.css';

const viewBox = {"width":358,"height":309};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGpdgfheTo)"><path class="zamxrp19a"/></g><defs><clipPath id="SVGpdgfheTo"><path class="rvmink5sm"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:axiom-light",
	});
}

export default Component;
