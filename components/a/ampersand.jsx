import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb2-eywbz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb2-eywbz"/>`,
		"fallback": "glyphs:ampersand",
	});
}

export default Component;
