import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hqygwwb5d.css';
import '../../css/e/e7sf8tb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hqygwwb5d"/><path class="e7sf8tb1d"/></g>`,
		"fallback": "keyline-icons:battery-low-sharp-duotone",
	});
}

export default Component;
