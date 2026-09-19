import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wih274b3e.css';
import '../../css/r/rq4_dyjkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="calendar-clear-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="wih274b3e"/><path class="rq4_dyjkw"/></g></g>`,
		"fallback": "cuida:calendar-clear-outline",
	});
}

export default Component;
