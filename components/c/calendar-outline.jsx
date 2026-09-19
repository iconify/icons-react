import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jh5366bnn.css';
import '../../css/t/tz4ef46-b.css';
import '../../css/t/to1k2cb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="calendar-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="jh5366bnn"/><path clip-rule="evenodd" class="tz4ef46-b"/><path class="to1k2cb9y"/></g></g>`,
		"fallback": "cuida:calendar-outline",
	});
}

export default Component;
