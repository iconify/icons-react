import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k2gijmsdy.css';
import '../../css/v/vpuht92ai.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k2gijmsdy"/><path class="vpuht92ai"/></g>`,
		"fallback": "si-glyph:button-arrow-right",
	});
}

export default Component;
