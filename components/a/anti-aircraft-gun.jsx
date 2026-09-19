import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9esv5bfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9esv5bfk"/>`,
		"fallback": "game-icons:anti-aircraft-gun",
	});
}

export default Component;
