import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zuyg1yrkn.css';
import '../../css/i/i378c-rig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zuyg1yrkn"/><path class="i378c-rig wm-a"/></g>`,
		"fallback": "withicons:calendar-minus-solid",
	});
}

export default Component;
