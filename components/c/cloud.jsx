import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/brvss_brb.css';
import '../../css/e/eh-e9f44q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="brvss_brb"/><path class="eh-e9f44q"/></g>`,
		"fallback": "pepicons-print:cloud",
	});
}

export default Component;
