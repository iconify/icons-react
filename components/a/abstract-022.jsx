import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc4-75bdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc4-75bdp"/>`,
		"fallback": "game-icons:abstract-022",
	});
}

export default Component;
