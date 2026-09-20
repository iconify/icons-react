import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v88749opi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v88749opi"/>`,
		"fallback": "mdi:blur-on",
	});
}

export default Component;
