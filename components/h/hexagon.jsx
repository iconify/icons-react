import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijp_u1bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijp_u1bct"/>`,
		"fallback": "mynaui:hexagon",
	});
}

export default Component;
