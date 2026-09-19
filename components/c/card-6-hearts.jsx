import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnh5l98-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnh5l98-c"/>`,
		"fallback": "game-icons:card-6-hearts",
	});
}

export default Component;
