import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ry_pmlbyo.css';
import '../../css/k/kl0r9tbks.css';
import '../../css/t/tah94fb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ry_pmlbyo"/><path class="kl0r9tbks"/><path class="tah94fb3i"/></g>`,
		"fallback": "streamline-freehand:cash-payment-bill",
	});
}

export default Component;
