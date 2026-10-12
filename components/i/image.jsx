import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euiqvmblv.css';
import '../../css/k/kjn39o4qu.css';
import '../../css/t/tr8xe4bes.css';
import '../../css/k/k1488cb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="euiqvmblv"/><rect class="kjn39o4qu"/><path class="tr8xe4bes"/><path class="k1488cb1l"/></g>`,
		"fallback": "andrsrxn:image",
	});
}

export default Component;
