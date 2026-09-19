import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccaxjcfjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccaxjcfjr"/>`,
		"fallback": "game-icons:boot-kick",
	});
}

export default Component;
