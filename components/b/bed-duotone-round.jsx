import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgt7cdc-z.css';
import '../../css/m/m6yg03b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgt7cdc-z"/><path class="m6yg03b1v"/></g>`,
		"fallback": "coolicons:bed-duotone-round",
	});
}

export default Component;
