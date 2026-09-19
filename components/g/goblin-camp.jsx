import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocj48bc2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocj48bc2m"/>`,
		"fallback": "game-icons:goblin-camp",
	});
}

export default Component;
