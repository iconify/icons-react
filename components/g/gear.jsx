import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mgpqpcbbs.css';
import '../../css/t/tdy8om3sr.css';
import '../../css/r/r-3cp4o3r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mgpqpcbbs"/><path class="tdy8om3sr"/><path class="r-3cp4o3r"/></g>`,
		"fallback": "pepicons-print:gear",
	});
}

export default Component;
