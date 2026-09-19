import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t0am5dblx.css';
import '../../css/x/x6-4_dbkf.css';
import '../../css/u/uu9hmksll.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="t0am5dblx"/><path class="x6-4_dbkf"/><path class="uu9hmksll"/></g>`,
		"fallback": "si-glyph:cabinet",
	});
}

export default Component;
