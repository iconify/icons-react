import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xruhiv3eq.css';
import '../../css/f/f9d3gkb8a.css';
import '../../css/v/vezdedbox.css';
import '../../css/v/v3ds90c7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xruhiv3eq"/><path class="f9d3gkb8a"/><path class="vezdedbox"/><path class="v3ds90c7j"/></g>`,
		"fallback": "keyline-icons:eye-off-sharp-duotone",
	});
}

export default Component;
