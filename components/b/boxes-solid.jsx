import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tqnnhl03b.css';
import '../../css/w/wst5g-b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tqnnhl03b"/><path class="wm-a wst5g-b-n"/></g>`,
		"fallback": "withicons:boxes-solid",
	});
}

export default Component;
