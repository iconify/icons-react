import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/dfxeknt9h.css';
import '../../css/y/y1-4fhbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="dfxeknt9h"/><path class="y1-4fhbrf"/></g>`,
		"fallback": "streamline-cyber:computer-screen-imac-download",
	});
}

export default Component;
