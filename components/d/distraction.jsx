import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlr1xxbrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlr1xxbrm"/>`,
		"fallback": "game-icons:distraction",
	});
}

export default Component;
