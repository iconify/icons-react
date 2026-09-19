import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q_qkayt-u.css';
import '../../css/j/jkd-mxbhi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q_qkayt-u"/><path class="jkd-mxbhi"/></g>`,
		"fallback": "gravity-ui:bell-dot",
	});
}

export default Component;
