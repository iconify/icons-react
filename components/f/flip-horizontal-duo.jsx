import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o761zrp8h.css';
import '../../css/k/kyiupabxi.css';
import '../../css/b/bhy4-61wh.css';
import '../../css/i/iwu-0yrln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o761zrp8h"/><path class="kyiupabxi wm-s"/><path class="bhy4-61wh"/><path class="iwu-0yrln wm-a"/></g>`,
		"fallback": "withicons:flip-horizontal-duo",
	});
}

export default Component;
