import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pubfbmb7r.css';
import '../../css/r/r9ynmqfyy.css';
import '../../css/a/azuzlgr1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pubfbmb7r"/><path class="r9ynmqfyy"/><path class="azuzlgr1c"/></g>`,
		"fallback": "keyline-icons:heart-hand-duotone",
	});
}

export default Component;
