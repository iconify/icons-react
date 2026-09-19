import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8z010bwq.css';
import '../../css/k/kpp0gibyb.css';
import '../../css/u/uxu_holod.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v8z010bwq"/><path class="kpp0gibyb"/><path clip-rule="evenodd" class="uxu_holod"/></g>`,
		"fallback": "codicon:collapse-all-compact",
	});
}

export default Component;
