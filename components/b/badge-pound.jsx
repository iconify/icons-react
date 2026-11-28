import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/u/uydycvbfl.css';
import '../../css/c/ci_ovbccc.css';
import '../../css/d/d47ryccpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l4--ovbba"/><path class="uydycvbfl"/><path class="ci_ovbccc"/><path class="d47ryccpg"/></g>`,
		"fallback": "iconaut:badge-pound",
	});
}

export default Component;
