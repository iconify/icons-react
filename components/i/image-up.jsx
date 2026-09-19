import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vvjh65z0p.css';
import '../../css/a/ave4vib6q.css';
import '../../css/t/tsk07gbjh.css';
import '../../css/w/weecswtrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vvjh65z0p"/><circle class="ave4vib6q"/><path class="tsk07gbjh"/><path class="weecswtrq"/></g>`,
		"fallback": "hugeicons:image-up",
	});
}

export default Component;
