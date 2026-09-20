import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x2l2t0bcl.css';
import '../../css/z/z4p0dubfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x2l2t0bcl"/><path class="z4p0dubfc"/></g>`,
		"fallback": "keyline-icons:grid-squares-check-sharp-two-tone",
	});
}

export default Component;
