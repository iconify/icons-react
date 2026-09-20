import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jso1dfb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jso1dfb6e"/>`,
		"fallback": "pixel:camera-solid",
	});
}

export default Component;
