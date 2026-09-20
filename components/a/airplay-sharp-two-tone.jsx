import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k74dq8uxm.css';
import '../../css/o/ojif5zbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k74dq8uxm"/><path class="ojif5zbhf"/></g>`,
		"fallback": "keyline-icons:airplay-sharp-two-tone",
	});
}

export default Component;
