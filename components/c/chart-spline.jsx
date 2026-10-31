import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zh6imhb-f.css';
import '../../css/f/fbk8z1bnm.css';
import '../../css/r/rsyvdzbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zh6imhb-f"/><path class="fbk8z1bnm wm-shadow"/><path class="rsyvdzbgy"/></g>`,
		"fallback": "withicons-brutal:chart-spline",
	});
}

export default Component;
