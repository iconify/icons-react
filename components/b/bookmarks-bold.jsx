import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rb0i5fyzc.css';
import '../../css/k/ktmahbbai.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rb0i5fyzc"/><path class="ktmahbbai"/></g>`,
		"fallback": "glyphs:bookmarks-bold",
	});
}

export default Component;
