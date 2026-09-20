import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9quobaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in9quobaj"/>`,
		"fallback": "mdi:account-tie-voice-off",
	});
}

export default Component;
