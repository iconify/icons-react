import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xa4j44bdc.css';
import '../../css/o/of24rdxhg.css';
import '../../css/b/b7n0xebhl.css';
import '../../css/e/esqc5vk8u.css';
import '../../css/k/k9mkh3bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xa4j44bdc"/><path class="of24rdxhg"/><path class="b7n0xebhl"/><path class="esqc5vk8u"/><path class="k9mkh3bqr"/></g>`,
		"fallback": "streamline-freehand:credit-card-payment",
	});
}

export default Component;
