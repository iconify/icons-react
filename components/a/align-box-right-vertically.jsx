import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zg2py6bwd.css';
import '../../css/z/zucpjf5lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zg2py6bwd"/><path class="zucpjf5lo"/></g>`,
		"fallback": "andrsrxn:align-box-right-vertically",
	});
}

export default Component;
