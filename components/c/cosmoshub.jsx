import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n2a2z7bro.css';
import '../../css/e/esqpnhuzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n2a2z7bro"/><path class="esqpnhuzb"/></g>`,
		"fallback": "token:cosmoshub",
	});
}

export default Component;
