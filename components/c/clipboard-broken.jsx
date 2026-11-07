import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rlxmudt8l.css';
import '../../css/q/qu0eyjbrg.css';
import '../../css/m/my5268blj.css';
import '../../css/z/zjfd1kaum.css';
import '../../css/r/r_va8z9vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rlxmudt8l"/><path class="qu0eyjbrg"/><path class="my5268blj"/><path class="zjfd1kaum"/><path class="r_va8z9vn"/></g>`,
		"fallback": "solar:clipboard-broken",
	});
}

export default Component;
