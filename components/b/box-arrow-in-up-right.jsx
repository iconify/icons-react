import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r5fbmwldh.css';
import '../../css/s/sb0936ekk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r5fbmwldh"/><path class="sb0936ekk"/></g>`,
		"fallback": "bi:box-arrow-in-up-right",
	});
}

export default Component;
