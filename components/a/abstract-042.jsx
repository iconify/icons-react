import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgfirvb8x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgfirvb8x"/>`,
		"fallback": "game-icons:abstract-042",
	});
}

export default Component;
