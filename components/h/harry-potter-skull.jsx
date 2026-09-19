import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg8p__biz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg8p__biz"/>`,
		"fallback": "game-icons:harry-potter-skull",
	});
}

export default Component;
