import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hqygwwb5d.css';
import '../../css/q/qtmox2skn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hqygwwb5d"/><path class="qtmox2skn"/></g>`,
		"fallback": "keyline-icons:battery-medium-sharp-two-tone",
	});
}

export default Component;
