import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v93gcqgfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v93gcqgfm"/>`,
		"fallback": "guidance:electric-wheelchair",
	});
}

export default Component;
