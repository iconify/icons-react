import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr_x1vbzj.css';
import '../../css/l/l8fxrac6r.css';
import '../../css/c/c_xenw62x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pr_x1vbzj"/><rect class="l8fxrac6r"/><path class="c_xenw62x"/></g>`,
		"fallback": "andrsrxn:browser-code",
	});
}

export default Component;
