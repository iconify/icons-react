import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wt642ibht.css';
import '../../css/y/y1erqjdmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wt642ibht"/><path class="y1erqjdmd"/></g>`,
		"fallback": "tabler:device-speaker-off",
	});
}

export default Component;
