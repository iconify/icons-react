import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r9nf2_wsj.css';
import '../../css/a/aag3kl4wn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r9nf2_wsj"/><path class="aag3kl4wn"/></g>`,
		"fallback": "glyphs-poly:heartbreak",
	});
}

export default Component;
