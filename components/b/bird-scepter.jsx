import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx0cgwb9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx0cgwb9u"/>`,
		"fallback": "game-icons:bird-scepter",
	});
}

export default Component;
