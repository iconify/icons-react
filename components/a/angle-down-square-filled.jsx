import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcjfc7t9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fcjfc7t9w"/>`,
		"fallback": "reicon:angle-down-square-filled",
	});
}

export default Component;
