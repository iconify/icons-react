import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4h395b6q.css';
import '../../css/w/w4luyebbu.css';
import '../../css/e/eun9ccb7s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4h395b6q"/><path class="w4luyebbu"/><path class="eun9ccb7s"/>`,
		"fallback": "streamline-pixel:email-mailbox-open",
	});
}

export default Component;
