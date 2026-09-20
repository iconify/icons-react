import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pb7h27bge.css';
import '../../css/r/r2mxfxb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pb7h27bge"/><path class="r2mxfxb3h"/></g>`,
		"fallback": "keyline-icons:fingerprint-pattern-sharp-two-tone",
	});
}

export default Component;
