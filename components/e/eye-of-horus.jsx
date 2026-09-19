import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwlfyobpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwlfyobpb"/>`,
		"fallback": "game-icons:eye-of-horus",
	});
}

export default Component;
