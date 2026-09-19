import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atjm0035i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atjm0035i"/>`,
		"fallback": "game-icons:crowbar",
	});
}

export default Component;
