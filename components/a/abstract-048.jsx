import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp6-7xz1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp6-7xz1l"/>`,
		"fallback": "game-icons:abstract-048",
	});
}

export default Component;
