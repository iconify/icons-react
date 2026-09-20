import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7sfh3a7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7sfh3a7z"/>`,
		"fallback": "mynaui:book-snooze-solid",
	});
}

export default Component;
