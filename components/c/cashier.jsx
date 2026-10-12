import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_b4fs6ts.css';
import '../../css/n/n1lpkmy7b.css';
import '../../css/i/ineqx1pui.css';
import '../../css/q/qzmk87bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.2 20.5)" class="r_b4fs6ts"/><rect transform="matrix(0 -1 -1 0 22.2 20.5)" class="n1lpkmy7b"/><path class="ineqx1pui"/><path class="qzmk87bpw"/></g>`,
		"fallback": "andrsrxn:cashier",
	});
}

export default Component;
