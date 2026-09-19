import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiue2_bzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiue2_bzj"/>`,
		"fallback": "game-icons:digital-trace",
	});
}

export default Component;
