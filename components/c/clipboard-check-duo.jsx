import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zj-cn9tqh.css';
import '../../css/n/nh1batb-t.css';
import '../../css/m/mzsw-jb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zj-cn9tqh"/><path class="nh1batb-t wm-a"/><path class="mzsw-jb7t"/></g>`,
		"fallback": "withicons:clipboard-check-duo",
	});
}

export default Component;
