import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyxywubpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyxywubpv"/>`,
		"fallback": "game-icons:abstract-077",
	});
}

export default Component;
