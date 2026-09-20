import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cdbxhjboo.css';
import '../../css/d/dhn_2_b2p.css';
import '../../css/i/i3nk3fxjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cdbxhjboo"/><path class="dhn_2_b2p"/><path class="i3nk3fxjs"/></g>`,
		"fallback": "streamline-freehand:check-payment-sign",
	});
}

export default Component;
