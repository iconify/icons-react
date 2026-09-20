import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gjg5ynbsr.css';
import '../../css/x/x0mt87bnf.css';
import '../../css/v/va1mprb_y.css';
import '../../css/c/cvam6ekry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gjg5ynbsr"/><path class="x0mt87bnf"/><path class="va1mprb_y"/><path class="cvam6ekry"/></g>`,
		"fallback": "solar:bed-bold-duotone",
	});
}

export default Component;
