import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gkwu9i_hd.css';
import '../../css/e/e629bhb9p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gkwu9i_hd"/><path class="e629bhb9p"/></g>`,
		"fallback": "si-glyph:document-error",
	});
}

export default Component;
