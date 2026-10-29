import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unn2jr1py.css';
import '../../css/n/nkf5ow3eb.css';
import '../../css/b/bwyxub51b.css';
import '../../css/d/d2wwclw8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unn2jr1py wm-k"/><path class="nkf5ow3eb wm-k"/><path class="bwyxub51b wm-k"/><path class="d2wwclw8o wm-shine"/></g>`,
		"fallback": "withicons-anime:arrow-up-down",
	});
}

export default Component;
