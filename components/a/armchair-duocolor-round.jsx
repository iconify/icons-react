import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/won3e36nd.css';
import '../../css/n/nm6ycbbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="won3e36nd"/><path class="nm6ycbbue"/></g>`,
		"fallback": "coolicons:armchair-duocolor-round",
	});
}

export default Component;
