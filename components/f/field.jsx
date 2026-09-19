import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqdqj7gbx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqdqj7gbx"/>`,
		"fallback": "game-icons:field",
	});
}

export default Component;
