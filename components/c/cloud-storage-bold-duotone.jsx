import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yd60c4dra.css';
import '../../css/e/ey4xq3dzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yd60c4dra"/><path class="ey4xq3dzw"/></g>`,
		"fallback": "solar:cloud-storage-bold-duotone",
	});
}

export default Component;
