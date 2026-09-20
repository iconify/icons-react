import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bdbhgfb6p.css';
import '../../css/g/g_njld96k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bdbhgfb6p"/><path class="g_njld96k"/></g>`,
		"fallback": "tabler:device-nintendo-off",
	});
}

export default Component;
