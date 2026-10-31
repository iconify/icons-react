import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4cri65sc.css';
import '../../css/c/c66qhtuof.css';
import '../../css/q/qd-f5-wbh.css';
import '../../css/e/e31revb4h.css';
import '../../css/h/hw2yu8l_n.css';
import '../../css/j/j4mueykom.css';
import '../../css/h/h09htvi4t.css';
import '../../css/a/ajfxs-b1m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="z4cri65sc"/><path class="c66qhtuof"/><path class="qd-f5-wbh"/><path class="e31revb4h"/><path class="hw2yu8l_n"/><path class="j4mueykom"/><path class="h09htvi4t"/><path class="ajfxs-b1m"/></g>`,
		"fallback": "iconito:ham",
	});
}

export default Component;
