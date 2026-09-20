import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uj7vncc3z.css';
import '../../css/m/mgxvo_oik.css';
import '../../css/t/ti8_utzrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uj7vncc3z"/><path class="mgxvo_oik"/><path class="ti8_utzrk"/></g>`,
		"fallback": "solar:cart-large-2-outline",
	});
}

export default Component;
