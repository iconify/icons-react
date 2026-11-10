import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvbs67blx.css';
import '../../css/z/zu_jtswwl.css';
import '../../css/c/cjzl9ubyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bvbs67blx"/><path class="zu_jtswwl"/><path class="cjzl9ubyd"/></g>`,
		"fallback": "andrsrxn:four-square",
	});
}

export default Component;
