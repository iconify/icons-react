import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/is1-e7bsp.css';
import '../../css/t/t-3v1hi-d.css';
import '../../css/z/zpc41qkph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="is1-e7bsp"/><path class="t-3v1hi-d"/><path class="zpc41qkph"/></g>`,
		"fallback": "andrsrxn:earbuds-right",
	});
}

export default Component;
