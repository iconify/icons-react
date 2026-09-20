import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k9_6zp9ba.css';
import '../../css/i/i2p_dkbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k9_6zp9ba"/><path clip-rule="evenodd" class="i2p_dkbsa"/></g>`,
		"fallback": "keyline-icons:graduation-cap-sharp-duotone",
	});
}

export default Component;
