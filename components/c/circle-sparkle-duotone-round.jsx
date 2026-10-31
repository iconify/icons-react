import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hk-ncvb_z.css';
import '../../css/q/qulk_jbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hk-ncvb_z"/><path class="qulk_jbzc"/></g>`,
		"fallback": "coolicons:circle-sparkle-duotone-round",
	});
}

export default Component;
