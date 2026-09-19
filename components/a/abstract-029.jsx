import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/engh2rwoy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="engh2rwoy"/>`,
		"fallback": "game-icons:abstract-029",
	});
}

export default Component;
