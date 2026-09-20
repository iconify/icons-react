import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/ar5l0tbdu.css';
import '../../css/h/hgkgp9enu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="ar5l0tbdu"/><path class="hgkgp9enu"/></g>`,
		"fallback": "keyline-icons:hat-glasses-sharp-fill",
	});
}

export default Component;
