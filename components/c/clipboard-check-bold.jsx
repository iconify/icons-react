import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcg_3dbrj.css';
import '../../css/t/tld5n46ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vcg_3dbrj"/><path clip-rule="evenodd" class="tld5n46ow"/></g>`,
		"fallback": "solar:clipboard-check-bold",
	});
}

export default Component;
