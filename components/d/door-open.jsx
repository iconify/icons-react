import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw_axvbpc.css';
import '../../css/r/r661y34wk.css';
import '../../css/r/replhxbbv.css';
import '../../css/v/vi68j6y1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jw_axvbpc wm-k"/><path class="r661y34wk wm-k"/><path class="replhxbbv wm-k"/><path class="vi68j6y1t wm-shadow"/></g>`,
		"fallback": "withicons-valentine:door-open",
	});
}

export default Component;
