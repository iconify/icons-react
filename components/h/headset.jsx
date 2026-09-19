import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c76mmpxmq.css';
import '../../css/d/dfxiwneey.css';
import '../../css/z/zr4xh6bhu.css';
import '../../css/l/l2tqzyxun.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c76mmpxmq"/><path class="dfxiwneey"/><path class="zr4xh6bhu"/><path class="l2tqzyxun"/></g>`,
		"fallback": "icon-park-outline:headset",
	});
}

export default Component;
