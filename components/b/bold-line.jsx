import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnc9n5bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnc9n5bok"/>`,
		"fallback": "si:bold-line",
	});
}

export default Component;
