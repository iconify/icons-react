import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_jyn858d.css';
import '../../css/r/rvp3pobsz.css';
import '../../css/z/z27jm6b0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e_jyn858d"/><path class="rvp3pobsz"/><path clip-rule="evenodd" class="z27jm6b0n"/></g>`,
		"fallback": "healthicons:chills-fever-outline",
	});
}

export default Component;
