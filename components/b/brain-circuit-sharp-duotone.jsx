import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d_pslabds.css';
import '../../css/c/cvcwjx53x.css';
import '../../css/e/ei48vjbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d_pslabds"/><path class="cvcwjx53x"/><path class="ei48vjbzf"/></g>`,
		"fallback": "keyline-icons:brain-circuit-sharp-duotone",
	});
}

export default Component;
