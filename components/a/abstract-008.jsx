import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkk216bvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkk216bvj"/>`,
		"fallback": "game-icons:abstract-008",
	});
}

export default Component;
