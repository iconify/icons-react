import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_jrl98rx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_jrl98rx"/>`,
		"fallback": "game-icons:abstract-118",
	});
}

export default Component;
