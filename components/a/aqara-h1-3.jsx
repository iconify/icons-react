import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v214gw1op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v214gw1op"/>`,
		"fallback": "cbi:aqara-h1-3",
	});
}

export default Component;
