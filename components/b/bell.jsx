import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prlpklbro.css';
import '../../css/e/eu24tmeaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="prlpklbro"/><path class="eu24tmeaa"/></g>`,
		"fallback": "andrsrxn:bell",
	});
}

export default Component;
