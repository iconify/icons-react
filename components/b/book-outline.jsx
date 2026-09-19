import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5ko7v8oa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5ko7v8oa"/>`,
		"fallback": "glyphs:book-outline",
	});
}

export default Component;
