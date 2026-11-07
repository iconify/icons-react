import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu07wd4oe.css';
import '../../css/j/j7xw_esfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu07wd4oe"/><path clip-rule="evenodd" class="j7xw_esfn"/>`,
		"fallback": "solar:hashtag-chat-bold",
	});
}

export default Component;
