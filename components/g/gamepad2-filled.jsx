import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8l2z-7sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g8l2z-7sl"/>`,
		"fallback": "reicon:gamepad2-filled",
	});
}

export default Component;
