import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fb_vrmb-h.css';
import '../../css/l/lt-y0ccsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fb_vrmb-h"/><path class="lt-y0ccsw"/></g>`,
		"fallback": "andrsrxn:film-cut",
	});
}

export default Component;
