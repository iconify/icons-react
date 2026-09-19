import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f42gr3bqh.css';
import '../../css/n/ntwz06bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f42gr3bqh"/><path class="ntwz06bwh"/></g>`,
		"fallback": "hugeicons:clock-arrow-up",
	});
}

export default Component;
