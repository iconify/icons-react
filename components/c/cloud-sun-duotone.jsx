import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vn6__6brb.css';
import '../../css/v/vc8mejyjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="vn6__6brb"/><path class="vc8mejyjf"/></g>`,
		"fallback": "reicon:cloud-sun-duotone",
	});
}

export default Component;
