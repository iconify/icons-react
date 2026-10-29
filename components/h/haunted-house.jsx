import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wbdf4r_bl.css';
import '../../css/r/r1dkfzbcd.css';
import '../../css/p/pqfxb1g_c.css';
import '../../css/x/x9rm5flou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wbdf4r_bl wm-k"/><path class="r1dkfzbcd wm-k"/><path class="pqfxb1g_c wm-s"/><path class="x9rm5flou"/></g>`,
		"fallback": "withicons-bauhaus:haunted-house",
	});
}

export default Component;
