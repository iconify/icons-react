import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sp1mbgw9c.css';
import '../../css/w/wsf7h1bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="sp1mbgw9c"/><path class="wsf7h1bvz"/></g>`,
		"fallback": "keyline-icons:baby-2-girl-sharp-fill",
	});
}

export default Component;
