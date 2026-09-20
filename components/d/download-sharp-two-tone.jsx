import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/ccx_2u5al.css';
import '../../css/p/p3xqt9u1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ccx_2u5al"/><path class="p3xqt9u1y"/></g>`,
		"fallback": "keyline-icons:download-sharp-two-tone",
	});
}

export default Component;
