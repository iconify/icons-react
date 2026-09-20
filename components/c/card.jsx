import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjlr4l5vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjlr4l5vx"/>`,
		"fallback": "token:card",
	});
}

export default Component;
