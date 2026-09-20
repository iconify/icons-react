import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cc_4uhv4l.css';
import '../../css/q/q0jt-hbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cc_4uhv4l"/><path class="q0jt-hbdy"/></g>`,
		"fallback": "tabler:inner-shadow-right",
	});
}

export default Component;
