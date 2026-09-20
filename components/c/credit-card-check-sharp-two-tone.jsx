import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pi2qqqb_t.css';
import '../../css/j/ju1d92a2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pi2qqqb_t"/><path class="ju1d92a2p"/></g>`,
		"fallback": "keyline-icons:credit-card-check-sharp-two-tone",
	});
}

export default Component;
