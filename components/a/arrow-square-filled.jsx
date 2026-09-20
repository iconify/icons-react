import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcny2x1-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcny2x1-u"/>`,
		"fallback": "reicon:arrow-square-filled",
	});
}

export default Component;
