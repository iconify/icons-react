import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g68wk6bgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g68wk6bgy"/>`,
		"fallback": "game-icons:funnel",
	});
}

export default Component;
