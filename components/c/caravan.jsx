import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re7k4oetg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re7k4oetg"/>`,
		"fallback": "game-icons:caravan",
	});
}

export default Component;
