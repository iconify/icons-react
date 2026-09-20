import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efs0dg7sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efs0dg7sg"/>`,
		"fallback": "reicon:bookmark-x-filled",
	});
}

export default Component;
