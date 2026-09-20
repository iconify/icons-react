import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es2q0bbgb.css';
import '../../css/c/cxua9cc6r.css';
import '../../css/t/tdtk3xqjc.css';
import '../../css/m/mo5qvibyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="es2q0bbgb"/><path class="cxua9cc6r"/><path class="tdtk3xqjc"/><path class="mo5qvibyu"/></g>`,
		"fallback": "majesticons:git-pull",
	});
}

export default Component;
