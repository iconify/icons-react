import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eqvg89l9a.css';
import '../../css/e/e-f139s-v.css';
import '../../css/i/ixjaemx-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eqvg89l9a"/><path class="e-f139s-v"/><path clip-rule="evenodd" class="ixjaemx-y"/></g>`,
		"fallback": "healthicons:blood-o-p-24px",
	});
}

export default Component;
