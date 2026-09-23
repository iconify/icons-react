import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hw_sn9wmj.css';
import '../../css/s/sd8cfcjbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hw_sn9wmj"/><path class="sd8cfcjbo"/></g>`,
		"fallback": "keyline-icons:divide-sharp-duotone",
	});
}

export default Component;
