import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pad031vtk.css';
import '../../css/r/r8r4r4bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pad031vtk"/><path clip-rule="evenodd" class="r8r4r4bvx"/></g>`,
		"fallback": "solar:home-add-outline",
	});
}

export default Component;
