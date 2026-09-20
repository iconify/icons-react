import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lx3elpdiz.css';
import '../../css/n/nk2qrub6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lx3elpdiz"/><path class="nk2qrub6c"/></g>`,
		"fallback": "solar:camera-minimalistic-bold",
	});
}

export default Component;
