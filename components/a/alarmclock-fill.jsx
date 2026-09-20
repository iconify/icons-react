import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0mjf_bxl.css';
import '../../css/i/i2qnklo0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0mjf_bxl"/><path clip-rule="evenodd" class="i2qnklo0a"/></g>`,
		"fallback": "lets-icons:alarmclock-fill",
	});
}

export default Component;
