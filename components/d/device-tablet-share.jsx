import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gfkbs9thc.css';
import '../../css/y/y-t3tbb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gfkbs9thc"/><path class="y-t3tbb4l"/></g>`,
		"fallback": "tabler:device-tablet-share",
	});
}

export default Component;
