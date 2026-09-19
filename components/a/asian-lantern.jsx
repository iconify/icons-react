import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e59zbs5hc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e59zbs5hc"/>`,
		"fallback": "game-icons:asian-lantern",
	});
}

export default Component;
