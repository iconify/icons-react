import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qu_0d0bni.css';
import '../../css/e/ec_s3xpce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qu_0d0bni wm-k"/><path class="ec_s3xpce wm-a"/></g>`,
		"fallback": "withicons:contrast-gloss",
	});
}

export default Component;
