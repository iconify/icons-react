import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1dps4g2r.css';
import '../../css/x/x9nfd7bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1dps4g2r"/><path class="x9nfd7bfg"/></g>`,
		"fallback": "lets-icons:arrow-left-long",
	});
}

export default Component;
