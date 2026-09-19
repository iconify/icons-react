import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvepz4bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvepz4bsi"/>`,
		"fallback": "cbi:arlo-audio-doorbell",
	});
}

export default Component;
