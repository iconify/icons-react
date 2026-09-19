import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9yv_e71e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g9yv_e71e"/>`,
		"fallback": "glyphs:arrow-solid-curve-outline",
	});
}

export default Component;
