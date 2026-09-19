import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8b1cac7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8b1cac7c"/>`,
		"fallback": "game-icons:heart-armor",
	});
}

export default Component;
