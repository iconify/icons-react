import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/roj5p736h.css';
import '../../css/v/vfadjcjnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="roj5p736h secondary"/><path class="primary vfadjcjnk"/></g>`,
		"fallback": "iconaut:fridge-duotone",
	});
}

export default Component;
