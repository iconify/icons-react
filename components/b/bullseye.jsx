import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj4w1gb3h.css';
import '../../css/a/a7zzmybnf.css';
import '../../css/w/wt_x01hno.css';
import '../../css/s/smag3rbcn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mj4w1gb3h"/><path class="a7zzmybnf"/><path class="wt_x01hno"/><path class="smag3rbcn"/></g>`,
		"fallback": "bi:bullseye",
	});
}

export default Component;
