import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l354m-bjc.css';
import '../../css/l/le0bygb8o.css';
import '../../css/r/reyjw4bwg.css';
import '../../css/f/f_zt0jdws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l354m-bjc"/><rect class="le0bygb8o"/><path class="reyjw4bwg"/><path class="f_zt0jdws"/></g>`,
		"fallback": "andrsrxn:image-square-off",
	});
}

export default Component;
