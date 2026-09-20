import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcg_3dbrj.css';
import '../../css/b/baqfgib2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vcg_3dbrj"/><path clip-rule="evenodd" class="baqfgib2y"/></g>`,
		"fallback": "solar:clipboard-add-bold",
	});
}

export default Component;
