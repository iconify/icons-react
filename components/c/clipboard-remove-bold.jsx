import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcg_3dbrj.css';
import '../../css/d/d1hd3v73f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vcg_3dbrj"/><path clip-rule="evenodd" class="d1hd3v73f"/></g>`,
		"fallback": "solar:clipboard-remove-bold",
	});
}

export default Component;
