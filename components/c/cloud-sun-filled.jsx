import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vc8mejyjf.css';
import '../../css/g/g0waxwb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vc8mejyjf"/><path class="g0waxwb_r"/></g>`,
		"fallback": "reicon:cloud-sun-filled",
	});
}

export default Component;
