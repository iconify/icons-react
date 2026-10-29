import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ua3gxd_3a.css';
import '../../css/w/w4v6mxbdl.css';
import '../../css/f/fyi1w-gps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ua3gxd_3a wm-k"/><path class="w4v6mxbdl wm-a"/><path class="fyi1w-gps"/></g>`,
		"fallback": "withicons-bauhaus:alpana",
	});
}

export default Component;
