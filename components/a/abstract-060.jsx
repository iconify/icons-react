import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2stk6dwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2stk6dwd"/>`,
		"fallback": "game-icons:abstract-060",
	});
}

export default Component;
