import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mcsnw-7-k.css';
import '../../css/n/ni_d926rs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mcsnw-7-k"/><path class="ni_d926rs"/></g>`,
		"fallback": "keyline-icons:fullscreen-sharp-two-tone",
	});
}

export default Component;
