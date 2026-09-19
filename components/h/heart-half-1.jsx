import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi655acym.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi655acym"/>`,
		"fallback": "glyphs:heart-half-1",
	});
}

export default Component;
