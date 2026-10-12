import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2qrjdgdm.css';
import '../../css/h/h149f_4lx.css';
import '../../css/z/zdvib58rb.css';
import '../../css/r/rx8s-dbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="h2qrjdgdm"/><path class="h149f_4lx"/><rect class="zdvib58rb"/><path class="rx8s-dbiv"/></g>`,
		"fallback": "andrsrxn:bank",
	});
}

export default Component;
