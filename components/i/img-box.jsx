import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1lxsfucb.css';
import '../../css/t/t64aplrtx.css';
import '../../css/k/k0evexoqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w1lxsfucb"/><path clip-rule="evenodd" class="t64aplrtx"/><circle class="k0evexoqr"/></g>`,
		"fallback": "lets-icons:img-box",
	});
}

export default Component;
