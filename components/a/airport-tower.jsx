import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yb6a_ib4d.css';
import '../../css/m/mye3znb3v.css';
import '../../css/g/grk9w7bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yb6a_ib4d"/><path class="mye3znb3v"/><path class="grk9w7bjs"/></g>`,
		"fallback": "andrsrxn:airport-tower",
	});
}

export default Component;
