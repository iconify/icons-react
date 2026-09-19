import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ln8m42s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ln8m42s"/>`,
		"fallback": "glyphs:grid-lg",
	});
}

export default Component;
