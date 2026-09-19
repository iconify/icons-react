import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw0lrnb0m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw0lrnb0m"/>`,
		"fallback": "glyphs:analytics",
	});
}

export default Component;
