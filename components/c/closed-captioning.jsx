import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs6t5b54u.css';
import '../../css/n/nyxigacnc.css';
import '../../css/l/l8moqtm8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="qs6t5b54u"/><rect class="nyxigacnc"/><path class="l8moqtm8s"/></g>`,
		"fallback": "andrsrxn:closed-captioning",
	});
}

export default Component;
