import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/aitz_4enm.css';
import '../../css/t/tjvuacchn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="aitz_4enm"/><path class="tjvuacchn"/></g>`,
		"fallback": "keyline-icons:alert-sharp-two-tone",
	});
}

export default Component;
