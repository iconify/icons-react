import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs8_5cw0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs8_5cw0e"/>`,
		"fallback": "reicon:fatrows-filled",
	});
}

export default Component;
