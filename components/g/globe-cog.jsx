import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o1e-g3_1s.css';
import '../../css/m/mbgo7jbwd.css';
import '../../css/d/da4on7b5f.css';
import '../../css/d/dq60wlbxs.css';
import '../../css/b/b9him6jfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o1e-g3_1s"/><path class="mbgo7jbwd"/><path class="da4on7b5f"/><path class="dq60wlbxs"/><path class="b9him6jfk"/></g>`,
		"fallback": "iconaut:globe-cog",
	});
}

export default Component;
