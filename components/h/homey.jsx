import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw0qoybyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw0qoybyk"/>`,
		"fallback": "cbi:homey",
	});
}

export default Component;
