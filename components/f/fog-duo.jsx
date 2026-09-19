import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6mhqvx1u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6mhqvx1u"/>`,
		"fallback": "glyphs:fog-duo",
	});
}

export default Component;
