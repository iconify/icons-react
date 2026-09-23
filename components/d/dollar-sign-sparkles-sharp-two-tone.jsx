import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qtwle9b1d.css';
import '../../css/s/snibgdcaa.css';
import '../../css/t/tphcq3b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qtwle9b1d"/><path class="snibgdcaa"/><path class="tphcq3b7e"/></g>`,
		"fallback": "keyline-icons:dollar-sign-sparkles-sharp-two-tone",
	});
}

export default Component;
