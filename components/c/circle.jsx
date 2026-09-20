import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2fx8qbsw.css';
import '../../css/d/dnbwnqp5s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r2fx8qbsw"/><path class="dnbwnqp5s"/></g>`,
		"fallback": "pepicons-print:circle",
	});
}

export default Component;
