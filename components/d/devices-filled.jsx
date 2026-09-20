import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvb8rhpxu.css';
import '../../css/m/m9uyfcc9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dvb8rhpxu"/><path clip-rule="evenodd" class="m9uyfcc9h"/></g>`,
		"fallback": "reicon:devices-filled",
	});
}

export default Component;
