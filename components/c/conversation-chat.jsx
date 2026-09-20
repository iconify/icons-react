import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdq7pzc7k.css';
import '../../css/o/ov7ogjxth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdq7pzc7k"/><path class="ov7ogjxth"/>`,
		"fallback": "streamline-freehand:conversation-chat",
	});
}

export default Component;
