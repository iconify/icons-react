import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw9a7ubbf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kw9a7ubbf"/>`,
		"fallback": "glyphs:envelope-front-bold",
	});
}

export default Component;
