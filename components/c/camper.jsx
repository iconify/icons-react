import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xdztghbni.css';
import '../../css/y/y2k61g54l.css';
import '../../css/q/q3mvq552s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xdztghbni"/><path class="y2k61g54l"/><path class="q3mvq552s"/></g>`,
		"fallback": "tabler:camper",
	});
}

export default Component;
