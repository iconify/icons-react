import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9-pjcbmr.css';
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
		"content": `<g class="ft5dv1b6b"><path class="b9-pjcbmr"/><path class="iuqi5qz7v"/><path class="f32r_rwqo"/></g>`,
		"fallback": "icon-park-outline:fireworks",
	});
}

export default Component;
