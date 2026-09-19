import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uk7s_pb3c.css';
import '../../css/c/cjiznhb-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uk7s_pb3c"/><path class="cjiznhb-w"/></g>`,
		"fallback": "heroicons-solid:clipboard-document-list",
	});
}

export default Component;
