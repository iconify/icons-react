import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_tif5bks.css';
import '../../css/f/fnam8wehh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_tif5bks"/><path class="fnam8wehh"/></g>`,
		"fallback": "iconamoon:component-duotone",
	});
}

export default Component;
