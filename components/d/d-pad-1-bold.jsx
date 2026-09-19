import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fparxj4eo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fparxj4eo"/>`,
		"fallback": "glyphs:d-pad-1-bold",
	});
}

export default Component;
