import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e32dpcbdi.css';
import '../../css/d/d-ig5rb5w.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="e32dpcbdi"/><path class="d-ig5rb5w wm-shine"/><path class="hooc3vbcx wm-k"/><path class="jmo57ab0a wm-a"/></g>`,
		"fallback": "withicons-kawaii:badge-x",
	});
}

export default Component;
