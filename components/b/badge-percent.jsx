import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tpyh8vb5n.css';
import '../../css/d/d-ig5rb5w.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/r/r2fnfdpvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="tpyh8vb5n"/><path class="d-ig5rb5w wm-shine"/><path class="hooc3vbcx wm-k"/><path class="r2fnfdpvh wm-a"/></g>`,
		"fallback": "withicons-kawaii:badge-percent",
	});
}

export default Component;
