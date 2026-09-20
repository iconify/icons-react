import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgykhgyqv.css';
import '../../css/t/txb2yy2ma.css';
import '../../css/e/ebco1zmpc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qgykhgyqv"/><path class="txb2yy2ma"/><path class="ebco1zmpc"/></g>`,
		"fallback": "thesvg-color:clerk-light",
	});
}

export default Component;
