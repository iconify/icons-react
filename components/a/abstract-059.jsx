import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnbm68e6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnbm68e6e"/>`,
		"fallback": "game-icons:abstract-059",
	});
}

export default Component;
