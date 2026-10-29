import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bsuo0en-y.css';
import '../../css/l/lu0o3pjvh.css';
import '../../css/i/ighrvy6qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bsuo0en-y"/><path class="lu0o3pjvh wm-a"/><path class="ighrvy6qd wm-s"/></g>`,
		"fallback": "withicons:globe-lock-solid",
	});
}

export default Component;
