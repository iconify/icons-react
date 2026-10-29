import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hvochnbfw.css';
import '../../css/s/spa5ssbyd.css';
import '../../css/u/ua-k4sbny.css';
import '../../css/d/dksj1oe9e.css';
import '../../css/e/evfqetbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hvochnbfw wm-k"/><path class="spa5ssbyd wm-s"/><path class="ua-k4sbny"/><path class="dksj1oe9e"/><path class="evfqetbdn wm-s"/></g>`,
		"fallback": "withicons-bauhaus:calendar-search",
	});
}

export default Component;
