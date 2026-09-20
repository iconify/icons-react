import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uosmzvb2v.css';
import '../../css/y/y9ynqipcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uosmzvb2v"/><path class="y9ynqipcp"/></g>`,
		"fallback": "si:double-arrow-right-fill",
	});
}

export default Component;
