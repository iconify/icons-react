import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1wyn0pqb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1wyn0pqb"/>`,
		"fallback": "game-icons:high-kick",
	});
}

export default Component;
