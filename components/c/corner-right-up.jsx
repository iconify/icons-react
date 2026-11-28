import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ljoi3tbdl.css';
import '../../css/v/vm1pivhbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ljoi3tbdl"/><path class="vm1pivhbg"/></g>`,
		"fallback": "iconaut:corner-right-up",
	});
}

export default Component;
