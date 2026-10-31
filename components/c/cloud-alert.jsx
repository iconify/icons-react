import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qls1b4w4x.css';
import '../../css/s/sfx2tz2qf.css';
import '../../css/o/ow2_-pl5v.css';
import '../../css/j/jpsbvtbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qls1b4w4x wm-shadow"/><path class="sfx2tz2qf wm-shadow"/><path class="ow2_-pl5v"/><path class="jpsbvtbhh"/></g>`,
		"fallback": "withicons-brutal:cloud-alert",
	});
}

export default Component;
