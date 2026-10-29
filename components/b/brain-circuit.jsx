import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uang0nbwd.css';
import '../../css/u/uevxz-vra.css';
import '../../css/f/f25g_20ew.css';
import '../../css/x/xu1456b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uang0nbwd wm-k"/><path class="uevxz-vra wm-a"/><path class="f25g_20ew wm-k"/><path class="xu1456b0q"/></g>`,
		"fallback": "withicons-bauhaus:brain-circuit",
	});
}

export default Component;
