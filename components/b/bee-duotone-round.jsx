import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjs_cnbwx.css';
import '../../css/p/pzk3ksbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjs_cnbwx"/><path class="pzk3ksbdv"/></g>`,
		"fallback": "coolicons:bee-duotone-round",
	});
}

export default Component;
