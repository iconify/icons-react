import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyfh_vbis.css';
import '../../css/l/lopx6zk4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyfh_vbis"/><path class="lopx6zk4q"/></g>`,
		"fallback": "majesticons:flower-2",
	});
}

export default Component;
