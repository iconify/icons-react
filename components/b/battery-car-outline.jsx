import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-vny2gon.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-vny2gon"/>`,
		"fallback": "glyphs:battery-car-outline",
	});
}

export default Component;
