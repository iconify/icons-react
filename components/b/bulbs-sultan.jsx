import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjyou81me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjyou81me"/>`,
		"fallback": "cbi:bulbs-sultan",
	});
}

export default Component;
