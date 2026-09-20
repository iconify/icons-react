import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-2a1ob9b.css';
import '../../css/u/ufjt8parv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y-2a1ob9b"/><path class="ufjt8parv"/></g>`,
		"fallback": "tabler:camera-pin",
	});
}

export default Component;
