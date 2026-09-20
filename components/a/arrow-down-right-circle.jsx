import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n64r6pb3k.css';
import '../../css/f/f0fk9cbko.css';
import '../../css/t/t69nndb1t.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n64r6pb3k"/><path class="f0fk9cbko"/><path class="t69nndb1t"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:arrow-down-right-circle",
	});
}

export default Component;
