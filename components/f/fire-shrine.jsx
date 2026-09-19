import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3n1nwowy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3n1nwowy"/>`,
		"fallback": "game-icons:fire-shrine",
	});
}

export default Component;
