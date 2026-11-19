import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ob6819b0v.css';
import '../../css/f/fbysei-9q.css';
import '../../css/i/i2kpd3x5t.css';
import '../../css/w/wa5c4nbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ob6819b0v"/><path class="fbysei-9q"/><circle class="i2kpd3x5t"/><path class="wa5c4nbtp"/></g>`,
		"fallback": "andrsrxn:folder-settings",
	});
}

export default Component;
