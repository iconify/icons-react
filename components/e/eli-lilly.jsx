import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idwguvbwi.css';

const viewBox = {"width":631,"height":344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idwguvbwi layer"/>`,
		"fallback": "thesvg-color:eli-lilly",
	});
}

export default Component;
