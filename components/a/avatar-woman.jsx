import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/ccsycwb7a.css';
import '../../css/x/x8a98837g.css';
import '../../css/h/hyiv-xb_h.css';
import '../../css/p/poq3yy2ry.css';
import '../../css/b/bdp8-zbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ccsycwb7a"/><path class="x8a98837g"/><path class="hyiv-xb_h"/><path class="poq3yy2ry"/><path class="bdp8-zbfm"/></g>`,
		"fallback": "withicons-bauhaus:avatar-woman",
	});
}

export default Component;
