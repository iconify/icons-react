import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f6p4mzv6l.css';
import '../../css/r/r9lxsuzcd.css';
import '../../css/r/r4cnm-b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 10.96 21.14)" class="f6p4mzv6l"/><rect transform="matrix(0 -1 -1 0 10.96 21.14)" class="r9lxsuzcd"/><path class="r4cnm-b1a"/></g>`,
		"fallback": "andrsrxn:downscale-dashed",
	});
}

export default Component;
