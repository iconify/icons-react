import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfgwycbvf.css';
import '../../css/q/qrjy62zvv.css';
import '../../css/b/b-xdjsx7h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="gfgwycbvf"/><g clip-path="url(#SVGKXSAsd8x)"><path class="qrjy62zvv"/></g><defs><clipPath id="SVGKXSAsd8x"><path class="b-xdjsx7h"/></clipPath></defs></g>`,
		"fallback": "skill-icons:discord",
	});
}

export default Component;
