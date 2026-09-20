import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uet3_hbcj.css';
import '../../css/v/vz8buvmxu.css';
import '../../css/i/im5vur_ck.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uet3_hbcj"/><path class="vz8buvmxu"/><path class="im5vur_ck"/></g>`,
		"fallback": "streamline-flex-color:align-back-1",
	});
}

export default Component;
