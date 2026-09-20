import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfkom2b1l.css';
import '../../css/l/lja5wgb3w.css';
import '../../css/k/k0evexoqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vfkom2b1l"/><path clip-rule="evenodd" class="lja5wgb3w"/><circle class="k0evexoqr"/></g>`,
		"fallback": "lets-icons:img-box-light",
	});
}

export default Component;
