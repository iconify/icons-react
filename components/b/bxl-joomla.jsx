import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou2p3-b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou2p3-b9u"/>`,
		"fallback": "bx:bxl-joomla",
	});
}

export default Component;
