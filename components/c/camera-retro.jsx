import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzlu99b6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzlu99b6h"/>`,
		"fallback": "fa-solid:camera-retro",
	});
}

export default Component;
