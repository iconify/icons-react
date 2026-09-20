import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/re7qe7ocu.css';
import '../../css/h/ha2riyb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="re7qe7ocu"/><path class="ha2riyb8q"/></g>`,
		"fallback": "streamline-freehand:form-validation-check-square-1",
	});
}

export default Component;
