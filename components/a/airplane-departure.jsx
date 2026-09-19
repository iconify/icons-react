import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo7obrd1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo7obrd1k"/>`,
		"fallback": "game-icons:airplane-departure",
	});
}

export default Component;
