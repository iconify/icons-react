import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc6io7jgc.css';
import '../../css/q/q6ly_lxbl.css';
import '../../css/t/tr8xe4bes.css';
import '../../css/g/gm1_xetap.css';
import '../../css/e/e1897xpej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hc6io7jgc"/><path class="q6ly_lxbl"/><path class="tr8xe4bes"/><path class="gm1_xetap"/><path class="e1897xpej"/></g>`,
		"fallback": "andrsrxn:image-off",
	});
}

export default Component;
