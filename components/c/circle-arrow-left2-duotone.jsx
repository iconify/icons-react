import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxii6vbsf.css';
import '../../css/f/fbr_x0byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxii6vbsf"/><path class="fbr_x0byt"/></g>`,
		"fallback": "reicon:circle-arrow-left2-duotone",
	});
}

export default Component;
