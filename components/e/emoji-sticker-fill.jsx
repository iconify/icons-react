import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ryo4pfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7ryo4pfl"/>`,
		"fallback": "ri:emoji-sticker-fill",
	});
}

export default Component;
