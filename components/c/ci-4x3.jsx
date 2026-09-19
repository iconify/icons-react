import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jfo4qb5dg.css';
import '../../css/q/qzval9buy.css';
import '../../css/j/j--hi9baf.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jfo4qb5dg"/><path class="qzval9buy"/><path class="j--hi9baf"/></g>`,
		"fallback": "flag:ci-4x3",
	});
}

export default Component;
