import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3x7evbku.css';
import '../../css/i/iwy_p0n3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z3x7evbku"/><path class="iwy_p0n3e"/></g>`,
		"fallback": "andrsrxn:flag-triangle-left",
	});
}

export default Component;
