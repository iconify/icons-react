import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubw56lkls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubw56lkls"/>`,
		"fallback": "game-icons:body-balance",
	});
}

export default Component;
