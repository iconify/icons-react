import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjdho9bvf.css';
import '../../css/r/rui6sqbeo.css';
import '../../css/h/h7wr9ib4b.css';
import '../../css/f/fxr0uoe_b.css';
import '../../css/r/rrn3fmb2n.css';
import '../../css/a/abx5nhb6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zjdho9bvf"/><path class="rui6sqbeo"/><path class="h7wr9ib4b"/><path class="fxr0uoe_b"/><ellipse class="rrn3fmb2n"/><ellipse class="abx5nhb6x"/></g>`,
		"fallback": "streamline-memes:doge",
	});
}

export default Component;
