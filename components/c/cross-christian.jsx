import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cskp9py_p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cskp9py_p"/>`,
		"fallback": "glyphs:cross-christian",
	});
}

export default Component;
