import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t2_m4dxqp.css';
import '../../css/s/s_v46hb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t2_m4dxqp"/><path class="s_v46hb4p wm-a"/></g>`,
		"fallback": "withicons:diya-solid",
	});
}

export default Component;
