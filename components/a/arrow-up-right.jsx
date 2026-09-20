import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g_8lrzb7q.css';
import '../../css/x/x-exdccqr.css';
import '../../css/s/so9dkqjrz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g_8lrzb7q"/><path class="x-exdccqr"/><path class="so9dkqjrz"/></g>`,
		"fallback": "pepicons-pencil:arrow-up-right",
	});
}

export default Component;
