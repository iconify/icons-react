import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/p1uzt9b1y.css';
import '../../css/q/qquxmp3_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="p1uzt9b1y"/><path class="qquxmp3_q"/></g>`,
		"fallback": "matita:hammer",
	});
}

export default Component;
