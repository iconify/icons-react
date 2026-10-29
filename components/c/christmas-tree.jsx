import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vplo5e_jn.css';
import '../../css/b/b29_gwzlq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vplo5e_jn"/><path class="b29_gwzlq wm-a"/></g>`,
		"fallback": "withicons:christmas-tree",
	});
}

export default Component;
