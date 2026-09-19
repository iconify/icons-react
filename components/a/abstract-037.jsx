import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuor6xgkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuor6xgkt"/>`,
		"fallback": "game-icons:abstract-037",
	});
}

export default Component;
