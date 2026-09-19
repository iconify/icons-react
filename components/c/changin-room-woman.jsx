import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiuc4wwhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiuc4wwhm"/>`,
		"fallback": "guidance:changin-room-woman",
	});
}

export default Component;
