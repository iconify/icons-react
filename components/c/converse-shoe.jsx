import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_th42tgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_th42tgu"/>`,
		"fallback": "game-icons:converse-shoe",
	});
}

export default Component;
