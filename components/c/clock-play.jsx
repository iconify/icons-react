import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ur-z1pb9o.css';
import '../../css/e/enkm3_blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ur-z1pb9o"/><path class="enkm3_blh"/></g>`,
		"fallback": "tabler:clock-play",
	});
}

export default Component;
