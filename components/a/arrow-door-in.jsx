import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q_sy8tl1b.css';
import '../../css/x/xpfqo1bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q_sy8tl1b"/><path class="xpfqo1bed"/></g>`,
		"fallback": "reicon:arrow-door-in",
	});
}

export default Component;
