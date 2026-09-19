import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyedy5iwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyedy5iwy"/>`,
		"fallback": "game-icons:frostfire",
	});
}

export default Component;
