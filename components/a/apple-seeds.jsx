import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6tclgh3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6tclgh3u"/>`,
		"fallback": "game-icons:apple-seeds",
	});
}

export default Component;
