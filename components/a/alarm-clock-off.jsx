import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d4jm538qv.css';
import '../../css/l/lm8htrlnu.css';
import '../../css/o/o29zkacir.css';
import '../../css/w/ws27-6kbj.css';
import '../../css/j/j6q31l12u.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d4jm538qv wm-shadow"/><path class="lm8htrlnu"/><path class="o29zkacir"/><path class="ws27-6kbj"/><path class="j6q31l12u"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:alarm-clock-off",
	});
}

export default Component;
