import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nqy4sg-vs.css';
import '../../css/b/b-hozbcci.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nqy4sg-vs"/><path class="b-hozbcci"/></g>`,
		"fallback": "si-glyph:document-remove",
	});
}

export default Component;
