import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjfg9214w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjfg9214w"/>`,
		"fallback": "game-icons:broken-bone",
	});
}

export default Component;
