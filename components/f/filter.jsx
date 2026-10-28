import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzbpy1ouj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzbpy1ouj"/>`,
		"fallback": "codex:filter",
	});
}

export default Component;
