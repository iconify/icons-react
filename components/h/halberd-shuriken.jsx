import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynfd2zbwq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynfd2zbwq"/>`,
		"fallback": "game-icons:halberd-shuriken",
	});
}

export default Component;
