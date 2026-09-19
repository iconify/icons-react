import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg0h8xb-u.css';
import '../../css/c/c0keyp4fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg0h8xb-u"/><circle class="c0keyp4fy"/>`,
		"fallback": "bx:game",
	});
}

export default Component;
