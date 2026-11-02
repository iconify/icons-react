import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw7442-qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw7442-qk"/>`,
		"fallback": "mingcute:calendar-arrow-down-line",
	});
}

export default Component;
