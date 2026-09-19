import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tj2_4cbrs.css';
import '../../css/m/mptv_pb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tj2_4cbrs"/><path class="mptv_pb-x"/></g>`,
		"fallback": "hugeicons:arrow-turn-down",
	});
}

export default Component;
