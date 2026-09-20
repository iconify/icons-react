import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hd09glbhk.css';
import '../../css/i/iodq_bcsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hd09glbhk"/><path class="iodq_bcsa"/></g>`,
		"fallback": "keyline-icons:headset-off-fill",
	});
}

export default Component;
