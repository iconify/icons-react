import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai2u7s5kj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai2u7s5kj"/>`,
		"fallback": "game-icons:abstract-020",
	});
}

export default Component;
