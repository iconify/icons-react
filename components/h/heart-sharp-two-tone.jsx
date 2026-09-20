import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/emer-yb3v.css';
import '../../css/z/zpv4lqb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="emer-yb3v"/><path class="zpv4lqb3x"/></g>`,
		"fallback": "keyline-icons:heart-sharp-two-tone",
	});
}

export default Component;
