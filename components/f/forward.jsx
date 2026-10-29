import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lszo-rkzd.css';
import '../../css/f/f1n_nhkjq.css';
import '../../css/r/rzq08ye8a.css';
import '../../css/u/uocod9h9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lszo-rkzd wm-k"/><path class="f1n_nhkjq wm-k"/><path class="rzq08ye8a wm-k"/><path class="uocod9h9h wm-shine"/></g>`,
		"fallback": "withicons-anime:forward",
	});
}

export default Component;
