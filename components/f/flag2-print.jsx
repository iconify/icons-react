import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/h/hz1t-jbqb.css';
import '../../css/y/y_1dp_3-h.css';
import '../../css/r/r6lr8tbvx.css';
import '../../css/l/lb_ecrc3y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="hz1t-jbqb"/><path clip-rule="evenodd" class="y_1dp_3-h"/></g><path clip-rule="evenodd" class="r6lr8tbvx"/><path clip-rule="evenodd" class="lb_ecrc3y"/></g>`,
		"fallback": "pepicons:flag2-print",
	});
}

export default Component;
