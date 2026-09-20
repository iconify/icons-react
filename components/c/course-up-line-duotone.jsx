import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywqj-vt6b.css';
import '../../css/a/ap54ysb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ywqj-vt6b"/><path class="ap54ysb4y"/></g>`,
		"fallback": "solar:course-up-line-duotone",
	});
}

export default Component;
