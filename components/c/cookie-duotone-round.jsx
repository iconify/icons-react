import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vql49sbvb.css';
import '../../css/i/iuo6_vyfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vql49sbvb"/><path class="iuo6_vyfp"/></g>`,
		"fallback": "coolicons:cookie-duotone-round",
	});
}

export default Component;
