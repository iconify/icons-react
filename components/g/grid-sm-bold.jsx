import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytj3mk6kx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytj3mk6kx"/>`,
		"fallback": "glyphs:grid-sm-bold",
	});
}

export default Component;
