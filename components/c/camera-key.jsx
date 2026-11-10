import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sk-2mf5up.css';
import '../../css/m/mzd9wts3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sk-2mf5up"/><path class="mzd9wts3c"/></g>`,
		"fallback": "tabler:camera-key",
	});
}

export default Component;
