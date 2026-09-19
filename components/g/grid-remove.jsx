import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0kbp0bsn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0kbp0bsn"/>`,
		"fallback": "glyphs:grid-remove",
	});
}

export default Component;
