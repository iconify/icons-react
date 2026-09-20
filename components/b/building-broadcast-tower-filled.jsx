import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sunc94b1a.css';
import '../../css/e/ewqp1cbed.css';
import '../../css/f/ficmb5hae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sunc94b1a"/><path class="ewqp1cbed"/><path class="ficmb5hae"/></g>`,
		"fallback": "tabler:building-broadcast-tower-filled",
	});
}

export default Component;
