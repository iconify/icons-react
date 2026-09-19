import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6e58ubjr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6e58ubjr"/>`,
		"fallback": "glyphs:border-none-bold",
	});
}

export default Component;
