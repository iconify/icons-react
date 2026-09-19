import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg3psup2u.css';
import '../../css/h/h6qog1b5o.css';
import '../../css/a/a-o3b9bhy.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dg3psup2u"/><path class="h6qog1b5o"/><path class="a-o3b9bhy"/></g>`,
		"fallback": "cif:ie",
	});
}

export default Component;
