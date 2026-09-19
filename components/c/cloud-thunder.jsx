import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bkna_vbco.css';
import '../../css/e/emiydobjc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bkna_vbco"/><path class="emiydobjc"/></g>`,
		"fallback": "si-glyph:cloud-thunder",
	});
}

export default Component;
