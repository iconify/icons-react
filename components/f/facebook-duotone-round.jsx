import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ybwg0escz.css';
import '../../css/v/v61x7pb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ybwg0escz"/><path class="v61x7pb6x"/></g>`,
		"fallback": "coolicons:facebook-duotone-round",
	});
}

export default Component;
