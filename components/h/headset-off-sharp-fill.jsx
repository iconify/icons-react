import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mi3dc7fdt.css';
import '../../css/n/ngv-p-37v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mi3dc7fdt"/><path class="ngv-p-37v"/></g>`,
		"fallback": "keyline-icons:headset-off-sharp-fill",
	});
}

export default Component;
