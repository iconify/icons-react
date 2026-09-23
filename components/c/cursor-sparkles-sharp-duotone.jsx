import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sf41u5dyp.css';
import '../../css/z/zr5m9kbwl.css';
import '../../css/z/z3w9o1b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="sf41u5dyp"/><path class="zr5m9kbwl"/><path class="z3w9o1b2x"/></g>`,
		"fallback": "keyline-icons:cursor-sparkles-sharp-duotone",
	});
}

export default Component;
