import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyxkdvbgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyxkdvbgk"/>`,
		"fallback": "game-icons:d10",
	});
}

export default Component;
