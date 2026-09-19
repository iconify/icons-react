import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i-w2xz1ec.css';
import '../../css/p/pka7ndbts.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i-w2xz1ec"/><path class="pka7ndbts"/></g>`,
		"fallback": "glyphs-poly:book-open",
	});
}

export default Component;
