import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftzq5d8pi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftzq5d8pi"/>`,
		"fallback": "f7:camera-rotate",
	});
}

export default Component;
