import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwaowabmr.css';
import '../../css/g/gg7zpivau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qwaowabmr"/><path class="gg7zpivau"/></g>`,
		"fallback": "lets-icons:download-duotone",
	});
}

export default Component;
