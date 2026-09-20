import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubwaw7-jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubwaw7-jm"/>`,
		"fallback": "uil:dialpad-alt",
	});
}

export default Component;
