import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cnm4tobcu.css';
import '../../css/d/d0kgfogdx.css';
import '../../css/h/hxiqqwbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cnm4tobcu"/><path class="d0kgfogdx"/><path class="hxiqqwbdc"/></g>`,
		"fallback": "keyline-icons:eye-off-sharp-two-tone",
	});
}

export default Component;
