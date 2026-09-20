import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vufk-kxci.css';
import '../../css/q/qgy99obou.css';
import '../../css/k/k0evexoqr.css';
import '../../css/n/nrfzh4bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vufk-kxci"/><path clip-rule="evenodd" class="qgy99obou"/><circle class="k0evexoqr"/><path class="nrfzh4bnr"/></g>`,
		"fallback": "lets-icons:img-load-box-light",
	});
}

export default Component;
