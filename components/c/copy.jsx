import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw3_qvbyu.css';
import '../../css/j/jfki3ygnf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sw3_qvbyu"/><path class="jfki3ygnf"/></g>`,
		"fallback": "rivet-icons:copy",
	});
}

export default Component;
