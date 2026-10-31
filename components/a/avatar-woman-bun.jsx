import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j0hgohbjf.css';
import '../../css/a/agel1da3k.css';
import '../../css/b/bgjdzjbce.css';
import '../../css/q/qsyy5gbfc.css';
import '../../css/e/el05qq-sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j0hgohbjf wm-shadow"/><path class="agel1da3k"/><path class="bgjdzjbce"/><path class="qsyy5gbfc"/><path class="el05qq-sl"/></g>`,
		"fallback": "withicons-retro:avatar-woman-bun",
	});
}

export default Component;
