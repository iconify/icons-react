import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esn7m-56g.css';
import '../../css/f/f-lr4zb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="esn7m-56g"/><path class="f-lr4zb_z"/></g>`,
		"fallback": "iconamoon:headphone-thin",
	});
}

export default Component;
