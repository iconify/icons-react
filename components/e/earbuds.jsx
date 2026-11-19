import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5qbghbzw.css';
import '../../css/e/etu1ebctc.css';
import '../../css/h/hzdrmeb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d5qbghbzw"/><path class="etu1ebctc"/><path class="hzdrmeb4h"/></g>`,
		"fallback": "andrsrxn:earbuds",
	});
}

export default Component;
