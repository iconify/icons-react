import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekqoz8b6p.css';
import '../../css/w/wg-wkfb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ekqoz8b6p"/><path class="wg-wkfb_u"/></g>`,
		"fallback": "reicon:confused-square-duotone",
	});
}

export default Component;
