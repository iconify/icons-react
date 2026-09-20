import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2d237g6e.css';
import '../../css/p/p_lv13bih.css';
import '../../css/k/k0evexoqr.css';
import '../../css/o/o8j0ktb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2d237g6e"/><path clip-rule="evenodd" class="p_lv13bih"/><circle class="k0evexoqr"/><path class="o8j0ktb4f"/></g>`,
		"fallback": "lets-icons:img-load-box",
	});
}

export default Component;
