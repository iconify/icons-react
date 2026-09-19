import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8e2ob0k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8e2ob0k"/>`,
		"fallback": "game-icons:goose",
	});
}

export default Component;
