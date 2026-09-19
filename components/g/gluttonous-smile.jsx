import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvgu6skht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvgu6skht"/>`,
		"fallback": "game-icons:gluttonous-smile",
	});
}

export default Component;
