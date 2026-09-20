import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/ztjio5yme.css';
import '../../css/d/ds3uxn1_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ztjio5yme"/><path class="ds3uxn1_o"/></g>`,
		"fallback": "keyline-icons:grid-circles-x-sharp-duotone",
	});
}

export default Component;
