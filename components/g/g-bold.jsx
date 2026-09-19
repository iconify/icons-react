import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/garrj2qto.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="garrj2qto"/>`,
		"fallback": "glyphs:g-bold",
	});
}

export default Component;
