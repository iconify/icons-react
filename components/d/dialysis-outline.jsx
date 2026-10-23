import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dt7t81_nm.css';
import '../../css/f/fvr250bdj.css';
import '../../css/v/vwy8x5bnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dt7t81_nm"/><path clip-rule="evenodd" class="fvr250bdj"/><path clip-rule="evenodd" class="vwy8x5bnj"/></g>`,
		"fallback": "healthicons:dialysis-outline",
	});
}

export default Component;
