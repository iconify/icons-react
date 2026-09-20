import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d_pslabds.css';
import '../../css/o/oaibiac4l.css';
import '../../css/e/ei48vjbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d_pslabds"/><path class="oaibiac4l"/><path class="ei48vjbzf"/></g>`,
		"fallback": "keyline-icons:brain-circuit-sharp-two-tone",
	});
}

export default Component;
