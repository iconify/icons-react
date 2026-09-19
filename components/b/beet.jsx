import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7ezc3bzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7ezc3bzg"/>`,
		"fallback": "game-icons:beet",
	});
}

export default Component;
