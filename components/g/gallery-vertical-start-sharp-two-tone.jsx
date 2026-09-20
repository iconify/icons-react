import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lu1_lacst.css';
import '../../css/e/e_e3qrs7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lu1_lacst"/><path class="e_e3qrs7m"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-start-sharp-two-tone",
	});
}

export default Component;
