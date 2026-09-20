import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij4axr-ub.css';
import '../../css/i/i-emrwbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ij4axr-ub"/><path class="i-emrwbnf"/></g>`,
		"fallback": "reicon:gamepad",
	});
}

export default Component;
