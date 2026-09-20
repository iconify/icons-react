import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w4_f7lhwx.css';
import '../../css/i/ih2x3qbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w4_f7lhwx"/><path class="ih2x3qbju"/></g>`,
		"fallback": "keyline-icons:app-dot-sharp-two-tone",
	});
}

export default Component;
