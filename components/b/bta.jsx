import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n5yjx1v8o.css';
import '../../css/k/kw-8ltpav.css';
import '../../css/u/u4khsjcqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n5yjx1v8o"/><path class="kw-8ltpav"/><path class="u4khsjcqg"/></g>`,
		"fallback": "token:bta",
	});
}

export default Component;
