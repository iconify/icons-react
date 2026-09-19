import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx2bwzbqr.css';
import '../../css/c/c3o_ezbrt.css';
import '../../css/h/h70urzc4n.css';
import '../../css/l/lk8u_z3zu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx2bwzbqr"/><path class="c3o_ezbrt"/><path class="h70urzc4n"/><path class="lk8u_z3zu"/>`,
		"fallback": "flat-color-icons:faq",
	});
}

export default Component;
