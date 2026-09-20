import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/er30yrbdv.css';
import '../../css/e/e3jnr7bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="er30yrbdv"/><path class="e3jnr7bts"/></g>`,
		"fallback": "nrk:dialogue",
	});
}

export default Component;
