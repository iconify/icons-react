import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a4ugxjb4a.css';
import '../../css/j/jkd-mxbhi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a4ugxjb4a"/><path class="jkd-mxbhi"/></g>`,
		"fallback": "gravity-ui:circle-question-dot",
	});
}

export default Component;
