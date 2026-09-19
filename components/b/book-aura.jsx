import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukwl3p9vr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukwl3p9vr"/>`,
		"fallback": "game-icons:book-aura",
	});
}

export default Component;
