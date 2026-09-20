import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5_w3cbpv.css';
import '../../css/d/dlv_i4blm.css';
import '../../css/y/yi1ygjbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5_w3cbpv"/><path clip-rule="evenodd" class="dlv_i4blm"/><path class="yi1ygjbjf"/></g>`,
		"fallback": "nrk:audio-description",
	});
}

export default Component;
