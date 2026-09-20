import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydh90c3is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydh90c3is"/>`,
		"fallback": "reicon:fx-filled",
	});
}

export default Component;
