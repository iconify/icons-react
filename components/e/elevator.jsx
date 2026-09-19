import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8qf3b_7u.css';
import '../../css/l/lyaqavbsk.css';
import '../../css/t/tm8mw0bav.css';
import '../../css/q/qh2kqpq0h.css';
import '../../css/j/jkt38pbrz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h8qf3b_7u"/><circle class="lyaqavbsk"/><path class="tm8mw0bav"/><circle class="qh2kqpq0h"/><path class="jkt38pbrz"/></g>`,
		"fallback": "foundation:elevator",
	});
}

export default Component;
