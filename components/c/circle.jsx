import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5owlbcir.css';
import '../../css/n/nkf5_lt8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="rotate(90 12 12)" class="ft5dv1b6b"><circle class="c5owlbcir"/><circle class="nkf5_lt8x"/></g>`,
		"fallback": "andrsrxn:circle",
	});
}

export default Component;
