import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xltvcrbmc.css';
import '../../css/w/wfvnn4b4v.css';
import '../../css/z/z19uyob6s.css';
import '../../css/o/om7eewmok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xltvcrbmc"/><path class="wfvnn4b4v"/><path class="z19uyob6s"/><path class="om7eewmok"/></g>`,
		"fallback": "streamline-freehand-color:cash-payment-bill",
	});
}

export default Component;
