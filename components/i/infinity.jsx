import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6l8o5b4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6l8o5b4c"/>`,
		"fallback": "game-icons:infinity",
	});
}

export default Component;
