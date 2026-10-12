import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3nny7b_l.css';
import '../../css/c/co8tsobue.css';
import '../../css/y/yzb8mim2i.css';
import '../../css/v/vsfn3sbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="e3nny7b_l"/><circle transform="rotate(90 12 12)" class="co8tsobue"/><ellipse transform="rotate(90 12 12)" class="yzb8mim2i"/><path class="vsfn3sbxc"/></g>`,
		"fallback": "andrsrxn:globe-off",
	});
}

export default Component;
