import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u2rpwubdb.css';
import '../../css/n/ntq22w6oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u2rpwubdb"/><path class="ntq22w6oh"/></g>`,
		"fallback": "keyline-icons:face-smile-plus-sharp-duotone",
	});
}

export default Component;
