import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5c_1dupa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5c_1dupa"/>`,
		"fallback": "glyphs:arrow-line-start",
	});
}

export default Component;
