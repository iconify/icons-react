import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjh0zxifh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjh0zxifh"/>`,
		"fallback": "noviair-light:app-window-gear",
	});
}

export default Component;
