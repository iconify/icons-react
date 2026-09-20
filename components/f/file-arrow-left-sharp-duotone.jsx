import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w5c8y-14a.css';
import '../../css/g/g6hnddcux.css';
import '../../css/r/rdgs7_b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w5c8y-14a"/><path clip-rule="evenodd" class="g6hnddcux"/><path class="rdgs7_b0n"/></g>`,
		"fallback": "keyline-icons:file-arrow-left-sharp-duotone",
	});
}

export default Component;
