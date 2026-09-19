import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i9b40_bso.css';
import '../../css/b/bosd9bbuc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i9b40_bso"/><path class="bosd9bbuc"/></g>`,
		"fallback": "si-glyph:bluetooth",
	});
}

export default Component;
