import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oxxm-1elz.css';
import '../../css/d/ddgafj9zr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oxxm-1elz"/><path class="ddgafj9zr"/></g>`,
		"fallback": "solar:git-pull-request-bold",
	});
}

export default Component;
