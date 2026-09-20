import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l73h5xklk.css';
import '../../css/z/z3_h9cbsy.css';
import '../../css/i/i-xjw8axl.css';

const viewBox = {"width":162,"height":48.7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l73h5xklk"><path class="z3_h9cbsy"/><path class="i-xjw8axl"/></g>`,
		"fallback": "thesvg-color:alaska-airlines-dark",
	});
}

export default Component;
