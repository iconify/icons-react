import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_legj-7r.css';
import '../../css/p/pi800kvzj.css';
import '../../css/k/kn_b06mhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_legj-7r"/><path class="pi800kvzj"/><path class="kn_b06mhl"/></g>`,
		"fallback": "andrsrxn:bread-slice",
	});
}

export default Component;
