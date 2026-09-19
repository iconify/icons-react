import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya7id6pwo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya7id6pwo"/>`,
		"fallback": "game-icons:half-body-crawling",
	});
}

export default Component;
