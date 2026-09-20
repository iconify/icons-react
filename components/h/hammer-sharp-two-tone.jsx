import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cp4xi8-am.css';
import '../../css/c/cfk46k0-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cp4xi8-am"/><path class="cfk46k0-y"/></g>`,
		"fallback": "keyline-icons:hammer-sharp-two-tone",
	});
}

export default Component;
