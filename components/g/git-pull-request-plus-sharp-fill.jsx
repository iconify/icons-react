import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h0myn7b2q.css';
import '../../css/h/hudd1fzvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h0myn7b2q"/><path class="hudd1fzvs"/></g>`,
		"fallback": "keyline-icons:git-pull-request-plus-sharp-fill",
	});
}

export default Component;
