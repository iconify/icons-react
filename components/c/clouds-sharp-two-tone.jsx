import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u2fthmbna.css';
import '../../css/m/m7fbq5bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u2fthmbna"/><path class="m7fbq5bav"/></g>`,
		"fallback": "keyline-icons:clouds-sharp-two-tone",
	});
}

export default Component;
