import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9ascjijb.css';
import '../../css/h/hrrl9p3-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t9ascjijb"/><path class="hrrl9p3-x"/></g>`,
		"fallback": "iconamoon:bookmark-duotone",
	});
}

export default Component;
