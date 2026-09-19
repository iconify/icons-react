import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4f2uacmd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4f2uacmd"/>`,
		"fallback": "glyphs:columns-3",
	});
}

export default Component;
