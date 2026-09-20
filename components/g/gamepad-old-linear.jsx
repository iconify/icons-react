import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/caog0qvka.css';
import '../../css/f/fvkw4oiyc.css';
import '../../css/v/v5l5vgbks.css';
import '../../css/h/hxi5c3b8i.css';
import '../../css/e/e_un4ubpg.css';
import '../../css/x/xkvin1h0r.css';
import '../../css/f/fng6irbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG6WNJNcPe)" class="caog0qvka"><path class="fvkw4oiyc"/><path class="v5l5vgbks"/><path class="hxi5c3b8i"/><path class="e_un4ubpg"/><path class="xkvin1h0r"/></g><defs><clipPath id="SVG6WNJNcPe"><rect class="fng6irbns"/></clipPath></defs></g>`,
		"fallback": "solar:gamepad-old-linear",
	});
}

export default Component;
