import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/og399p1rd.css';
import '../../css/u/uuaa4bcqw.css';
import '../../css/g/giwb81ztw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="og399p1rd wm-shadow"/><path class="uuaa4bcqw wm-shadow"/><path class="giwb81ztw"/></g>`,
		"fallback": "withicons-brutal:chart-scatter",
	});
}

export default Component;
