import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dq3ueh2oc.css';
import '../../css/t/teh9ljbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dq3ueh2oc"/><path class="teh9ljbuc"/></g>`,
		"fallback": "iconaut:french-fries",
	});
}

export default Component;
