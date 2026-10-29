import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hrl56db3t.css';
import '../../css/h/hx1jtbbgy.css';
import '../../css/g/glni1gbio.css';
import '../../css/o/o9iv1eb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hrl56db3t wm-k"/><path class="hx1jtbbgy wm-s"/><path class="glni1gbio"/><path class="o9iv1eb9h"/></g>`,
		"fallback": "withicons-bauhaus:globe-lock",
	});
}

export default Component;
