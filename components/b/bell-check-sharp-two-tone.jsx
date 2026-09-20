import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g7fhx_bau.css';
import '../../css/k/kbgdqip8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="g7fhx_bau"/><path class="kbgdqip8u"/></g>`,
		"fallback": "keyline-icons:bell-check-sharp-two-tone",
	});
}

export default Component;
