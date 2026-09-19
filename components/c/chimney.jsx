import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pna37sb4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pna37sb4m"/>`,
		"fallback": "game-icons:chimney",
	});
}

export default Component;
