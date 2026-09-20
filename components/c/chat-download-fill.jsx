import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwlhw678o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwlhw678o"/>`,
		"fallback": "ri:chat-download-fill",
	});
}

export default Component;
