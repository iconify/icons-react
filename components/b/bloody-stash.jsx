import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_o5xl9_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_o5xl9_x"/>`,
		"fallback": "game-icons:bloody-stash",
	});
}

export default Component;
