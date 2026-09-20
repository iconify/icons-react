import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t0julz55n.css';
import '../../css/f/fcicr5dwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t0julz55n"/><path class="fcicr5dwl"/></g>`,
		"fallback": "reicon:cart2-filled",
	});
}

export default Component;
