import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz_n9wboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz_n9wboi"/>`,
		"fallback": "tdesign:chat-bubble-help-filled",
	});
}

export default Component;
