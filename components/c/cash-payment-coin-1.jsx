import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nab_d0b5c.css';
import '../../css/f/fd-mpbcys.css';
import '../../css/d/dxlw381mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nab_d0b5c"/><path class="fd-mpbcys"/><path class="dxlw381mk"/></g>`,
		"fallback": "streamline-freehand:cash-payment-coin-1",
	});
}

export default Component;
