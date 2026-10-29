import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rydv3c-sn.css';
import '../../css/p/p-hrpq4_g.css';
import '../../css/u/un1y0bcem.css';
import '../../css/p/pmmvftdsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rydv3c-sn wm-k"/><path class="p-hrpq4_g wm-a"/><path class="un1y0bcem"/><path class="pmmvftdsc"/></g>`,
		"fallback": "withicons-bauhaus:candy-bucket",
	});
}

export default Component;
