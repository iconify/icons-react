import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dw39a-bwv.css';
import '../../css/r/rxx21sbup.css';
import '../../css/w/wyubm_1dg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dw39a-bwv"/><path clip-rule="evenodd" class="rxx21sbup"/><path clip-rule="evenodd" class="wyubm_1dg"/></g>`,
		"fallback": "healthicons:crutches-outline",
	});
}

export default Component;
