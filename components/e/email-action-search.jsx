import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cd5vnq-1e.css';
import '../../css/p/ponhrbaxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cd5vnq-1e"/><path class="ponhrbaxq"/></g>`,
		"fallback": "streamline-freehand:email-action-search",
	});
}

export default Component;
