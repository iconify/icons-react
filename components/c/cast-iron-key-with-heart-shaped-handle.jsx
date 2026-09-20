import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsvbapugp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsvbapugp"/>`,
		"fallback": "pinhead:cast-iron-key-with-heart-shaped-handle",
	});
}

export default Component;
