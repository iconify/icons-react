import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a8vt4kbxp.css';
import '../../css/c/cxoqg3pds.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a8vt4kbxp"/><path class="cxoqg3pds"/></g>`,
		"fallback": "si-glyph:basket-remove",
	});
}

export default Component;
