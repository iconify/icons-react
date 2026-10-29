import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yy33eebqt.css';
import '../../css/i/i-e0xfb7g.css';
import '../../css/k/kd4jkuf5m.css';
import '../../css/j/j_5p8mbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wm-a yy33eebqt"/><path class="i-e0xfb7g"/><path class="kd4jkuf5m wm-a"/><path class="j_5p8mbom wm-a"/></g>`,
		"fallback": "withicons:hand-coins",
	});
}

export default Component;
