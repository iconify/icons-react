import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryosbh_ci.css';
import '../../css/d/dwrbldbpv.css';
import '../../css/g/gk9rljbji.css';
import '../../css/e/e7ypefbqr.css';
import '../../css/b/bcv21-brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ryosbh_ci"/><rect class="dwrbldbpv"/><path class="gk9rljbji"/><rect class="e7ypefbqr"/><path class="bcv21-brt"/></g>`,
		"fallback": "andrsrxn:browser-lock",
	});
}

export default Component;
