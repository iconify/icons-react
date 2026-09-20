import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejx6sqbnl.css';
import '../../css/u/uuh9nk8ah.css';
import '../../css/c/cyvnih9jt.css';
import '../../css/b/b9cxh-bmh.css';
import '../../css/n/n_9deq2bu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ejx6sqbnl"/><path class="uuh9nk8ah"/><path class="cyvnih9jt"/><path class="b9cxh-bmh"/><path class="n_9deq2bu"/></g>`,
		"fallback": "streamline-color:gmail",
	});
}

export default Component;
