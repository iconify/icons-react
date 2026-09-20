import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekqxqyb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekqxqyb0b"/>`,
		"fallback": "majesticons:chat-signal-line",
	});
}

export default Component;
