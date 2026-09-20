import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfgv5d9ci.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfgv5d9ci"/>`,
		"fallback": "la:camera-solid",
	});
}

export default Component;
