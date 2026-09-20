import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/blanb_bsy.css';
import '../../css/a/af95is16y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="blanb_bsy"/><path class="af95is16y"/></g>`,
		"fallback": "tdesign:chart-draw-io",
	});
}

export default Component;
