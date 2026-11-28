import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wmhbu62zg.css';
import '../../css/a/apxgbkbnj.css';
import '../../css/w/whdadlbkx.css';
import '../../css/r/rioyq6k2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wmhbu62zg"/><path class="apxgbkbnj"/><path class="whdadlbkx"/><path class="rioyq6k2h"/></g>`,
		"fallback": "iconaut:bug",
	});
}

export default Component;
