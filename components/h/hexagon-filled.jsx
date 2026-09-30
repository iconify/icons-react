import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3j3q0biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3j3q0biq"/>`,
		"fallback": "ix:hexagon-filled",
	});
}

export default Component;
