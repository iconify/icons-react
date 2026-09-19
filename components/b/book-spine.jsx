import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo7wix1lf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo7wix1lf"/>`,
		"fallback": "glyphs:book-spine",
	});
}

export default Component;
