import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ie_33mcru.css';
import '../../css/p/pc6eh-ilv.css';
import '../../css/v/v7v_u0jql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ie_33mcru"/><path class="pc6eh-ilv"/><path class="v7v_u0jql wm-a"/></g>`,
		"fallback": "withicons:dog",
	});
}

export default Component;
