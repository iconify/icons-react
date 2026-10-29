import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r6zdo0mwd.css';
import '../../css/z/zki05l2_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r6zdo0mwd"/><path class="wm-a zki05l2_a"/></g>`,
		"fallback": "withicons:clover",
	});
}

export default Component;
