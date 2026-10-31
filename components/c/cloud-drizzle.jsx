import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v1orcgblb.css';
import '../../css/o/omwmftqpt.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/q/q6qhexbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="v1orcgblb wm-shadow"/><path class="omwmftqpt wm-shadow"/><path class="n1y1i5mpe"/><path class="q6qhexbzb"/></g>`,
		"fallback": "withicons-brutal:cloud-drizzle",
	});
}

export default Component;
