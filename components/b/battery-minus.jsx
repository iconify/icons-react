import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yu94ktb9a.css';
import '../../css/y/y3-35o4du.css';
import '../../css/u/u5avl94_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="yu94ktb9a"/><rect class="y3-35o4du"/><path class="u5avl94_d"/></g>`,
		"fallback": "andrsrxn:battery-minus",
	});
}

export default Component;
