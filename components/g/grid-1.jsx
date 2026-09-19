import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9o14pb8j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9o14pb8j"/>`,
		"fallback": "glyphs:grid-1",
	});
}

export default Component;
