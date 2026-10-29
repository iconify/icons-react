import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p1_-7n0_d.css';
import '../../css/q/qbtxg_ars.css';
import '../../css/i/i028zybqz.css';
import '../../css/x/xf8gb8yzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="p1_-7n0_d wm-k"/><path class="qbtxg_ars wm-a"/><path class="i028zybqz"/><path class="xf8gb8yzl"/></g>`,
		"fallback": "withicons-bauhaus:bee",
	});
}

export default Component;
