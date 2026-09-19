import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab7bv8b0v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab7bv8b0v"/>`,
		"fallback": "glyphs-poly:heading",
	});
}

export default Component;
