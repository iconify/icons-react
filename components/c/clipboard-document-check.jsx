import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pe1yc0n7n.css';
import '../../css/j/j2--rpuon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pe1yc0n7n"/><path class="j2--rpuon"/></g>`,
		"fallback": "heroicons-solid:clipboard-document-check",
	});
}

export default Component;
