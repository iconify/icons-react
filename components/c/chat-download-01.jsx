import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rqfbr__fl.css';
import '../../css/q/q5-dhc8gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rqfbr__fl"/><path class="q5-dhc8gp"/></g>`,
		"fallback": "hugeicons:chat-download-01",
	});
}

export default Component;
