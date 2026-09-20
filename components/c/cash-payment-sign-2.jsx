import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y9cqsj9ck.css';
import '../../css/k/kjs84gcie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y9cqsj9ck"/><path class="kjs84gcie"/></g>`,
		"fallback": "streamline-freehand:cash-payment-sign-2",
	});
}

export default Component;
