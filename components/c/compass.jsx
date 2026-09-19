import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/etqbe4rqk.css';
import '../../css/p/p2t0wu_el.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="etqbe4rqk"/><path class="p2t0wu_el"/></g>`,
		"fallback": "codicon:compass",
	});
}

export default Component;
