import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wg-wkfb_u.css';
import '../../css/k/kpsf3pb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wg-wkfb_u"/><path class="kpsf3pb4n"/></g>`,
		"fallback": "reicon:confused-circle-duotone",
	});
}

export default Component;
