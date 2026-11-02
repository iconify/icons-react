import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y20ik4bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y20ik4bhm"/>`,
		"fallback": "mingcute:boom-box-line",
	});
}

export default Component;
