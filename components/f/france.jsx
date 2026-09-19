import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae7fp43ew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae7fp43ew"/>`,
		"fallback": "game-icons:france",
	});
}

export default Component;
