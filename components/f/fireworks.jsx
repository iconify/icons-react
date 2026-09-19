import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzvy_2b4u.css';
import '../../css/i/iuqi5qz7v.css';
import '../../css/f/f32r_rwqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hzvy_2b4u"/><path class="iuqi5qz7v"/><path class="f32r_rwqo"/></g>`,
		"fallback": "icon-park-solid:fireworks",
	});
}

export default Component;
