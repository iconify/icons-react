import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/puu02tbhe.css';
import '../../css/l/lau362bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="puu02tbhe"/><path clip-rule="evenodd" class="lau362bvl"/></g>`,
		"fallback": "griddy-icons:cow",
	});
}

export default Component;
