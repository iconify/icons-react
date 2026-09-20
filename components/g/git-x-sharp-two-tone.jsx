import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u_vjevdkc.css';
import '../../css/a/a57frnbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u_vjevdkc"/><path class="a57frnbtw"/></g>`,
		"fallback": "keyline-icons:git-x-sharp-two-tone",
	});
}

export default Component;
