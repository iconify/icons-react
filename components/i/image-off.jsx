import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bn00yob0d.css';
import '../../css/q/q6ly_lxbl.css';
import '../../css/k/kjn39o4qu.css';
import '../../css/t/tr8xe4bes.css';
import '../../css/l/lwquj8bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bn00yob0d"/><path class="q6ly_lxbl"/><rect class="kjn39o4qu"/><path class="tr8xe4bes"/><path class="lwquj8bck"/></g>`,
		"fallback": "andrsrxn:image-off",
	});
}

export default Component;
