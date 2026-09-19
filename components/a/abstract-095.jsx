import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoyw6ibyy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoyw6ibyy"/>`,
		"fallback": "game-icons:abstract-095",
	});
}

export default Component;
