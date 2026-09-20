import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xze4flb4n.css';
import '../../css/c/c-k6wfd2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xze4flb4n"/><path class="c-k6wfd2l"/></g>`,
		"fallback": "majesticons:covid-exclamation",
	});
}

export default Component;
