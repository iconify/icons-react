import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yuujzdx_x.css';
import '../../css/h/hl2dq2b3a.css';
import '../../css/b/b61j3abxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yuujzdx_x"/><path class="hl2dq2b3a"/><path class="b61j3abxr"/></g>`,
		"fallback": "matita:circle-x",
	});
}

export default Component;
