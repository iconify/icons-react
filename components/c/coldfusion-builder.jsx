import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cao2c2b5u.css';
import '../../css/d/dlwhxsm1r.css';
import '../../css/v/vb7gojb-k.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="cao2c2b5u"/><path clip-rule="evenodd" class="dlwhxsm1r"/><path clip-rule="evenodd" class="vb7gojb-k"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:coldfusion-builder",
	});
}

export default Component;
