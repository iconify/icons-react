import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sds68hb6x.css';
import '../../css/n/n9_socc_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sds68hb6x"/><path class="n9_socc_h"/></g>`,
		"fallback": "at-icons:armor-boots",
	});
}

export default Component;
