import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vzk2kny2m.css';
import '../../css/m/mebxffbtj.css';
import '../../css/v/vhf1loixc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vzk2kny2m"/><path class="mebxffbtj"/><path class="vhf1loixc"/></g>`,
		"fallback": "streamline-cyber-color:beach",
	});
}

export default Component;
