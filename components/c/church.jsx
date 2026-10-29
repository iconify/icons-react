import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q7e--vbpk.css';
import '../../css/s/s38r-ac4v.css';
import '../../css/i/iiy298fsr.css';
import '../../css/n/no98bwjtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q7e--vbpk wm-k"/><path class="s38r-ac4v wm-k"/><path class="iiy298fsr"/><path class="no98bwjtv wm-s"/></g>`,
		"fallback": "withicons-bauhaus:church",
	});
}

export default Component;
