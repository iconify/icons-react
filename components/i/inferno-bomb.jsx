import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua8thwjmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua8thwjmd"/>`,
		"fallback": "game-icons:inferno-bomb",
	});
}

export default Component;
