import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjtkerbmh.css';
import '../../css/n/naf5r2twt.css';
import '../../css/q/qi3w0_b3l.css';
import '../../css/k/kehz7nk9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zjtkerbmh"/><path class="naf5r2twt"/><path class="qi3w0_b3l"/><path class="kehz7nk9q"/></g>`,
		"fallback": "andrsrxn:hand-touch",
	});
}

export default Component;
