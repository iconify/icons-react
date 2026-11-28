import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/apucw0_mz.css';
import '../../css/b/bspa-lbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="apucw0_mz secondary"/><path class="bspa-lbnu primary"/></g>`,
		"fallback": "iconaut:gate-not-duotone",
	});
}

export default Component;
