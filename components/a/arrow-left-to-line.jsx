import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h3rqpkjxm.css';
import '../../css/p/pbhf4ibgw.css';
import '../../css/l/lv1lbhbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h3rqpkjxm"/><path class="pbhf4ibgw"/><path class="lv1lbhbdn"/></g>`,
		"fallback": "iconaut:arrow-left-to-line",
	});
}

export default Component;
