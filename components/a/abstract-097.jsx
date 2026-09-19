import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz42u830k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz42u830k"/>`,
		"fallback": "game-icons:abstract-097",
	});
}

export default Component;
