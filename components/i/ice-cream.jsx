import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jjv1f5gfi.css';
import '../../css/e/e99fsibxx.css';
import '../../css/y/y625efgvw.css';
import '../../css/s/sbg4v9b8v.css';
import '../../css/k/kib5eyv6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jjv1f5gfi wm-shadow"/><path class="e99fsibxx wm-shadow"/><path class="y625efgvw"/><path class="sbg4v9b8v"/><path class="kib5eyv6x"/></g>`,
		"fallback": "withicons-brutal:ice-cream",
	});
}

export default Component;
