import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aognim-rb.css';
import '../../css/e/ew3soe-eq.css';
import '../../css/u/ua-k4sbny.css';
import '../../css/v/v-izr4c3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="aognim-rb"/><path class="ew3soe-eq"/><path class="ua-k4sbny"/><path class="v-izr4c3h"/></g>`,
		"fallback": "withicons-bauhaus:calendar-heart",
	});
}

export default Component;
