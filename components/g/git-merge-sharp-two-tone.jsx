import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mueb7hbap.css';
import '../../css/q/qpoj1zb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mueb7hbap"/><path class="qpoj1zb_h"/></g>`,
		"fallback": "keyline-icons:git-merge-sharp-two-tone",
	});
}

export default Component;
