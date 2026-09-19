import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jeatfnbnz.css';
import '../../css/l/lc2rnbzuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="jeatfnbnz"/><path class="lc2rnbzuq"/></g>`,
		"fallback": "akar-icons:chat-question",
	});
}

export default Component;
