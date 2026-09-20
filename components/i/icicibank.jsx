import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2nk0cb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2nk0cb5n"/>`,
		"fallback": "simple-icons:icicibank",
	});
}

export default Component;
