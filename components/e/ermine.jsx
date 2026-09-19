import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2l3r8buk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2l3r8buk"/>`,
		"fallback": "game-icons:ermine",
	});
}

export default Component;
