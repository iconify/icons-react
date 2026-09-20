import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dmpojzbor.css';
import '../../css/p/psu3ivbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dmpojzbor"/><path class="psu3ivbnw"/></g>`,
		"fallback": "reicon:circle-top-up",
	});
}

export default Component;
