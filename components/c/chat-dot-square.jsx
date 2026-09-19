import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lythdhbow.css';
import '../../css/f/f4kf9cc7v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lythdhbow"/><path class="f4kf9cc7v"/>`,
		"fallback": "ep:chat-dot-square",
	});
}

export default Component;
