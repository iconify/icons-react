import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xd6pe9bvg.css';
import '../../css/s/sg5u4cmdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xd6pe9bvg"/><path clip-rule="evenodd" class="sg5u4cmdq"/></g>`,
		"fallback": "griddy-icons:eftpos-alt",
	});
}

export default Component;
