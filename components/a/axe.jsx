import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dfj_3yboj.css';
import '../../css/a/ao_zh-bjm.css';
import '../../css/r/r377t0ghm.css';
import '../../css/v/vhsjh8bib.css';
import '../../css/j/jjdkbeblc.css';
import '../../css/k/kt7t3876q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dfj_3yboj wm-shadow"/><path class="ao_zh-bjm"/><path class="r377t0ghm"/><path class="vhsjh8bib"/><path class="jjdkbeblc"/><path class="kt7t3876q"/></g>`,
		"fallback": "withicons-retro:axe",
	});
}

export default Component;
