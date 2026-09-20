import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qpcvw8b8t.css';
import '../../css/e/er1txxxoe.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qpcvw8b8t"/><path class="er1txxxoe"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:chain-circle",
	});
}

export default Component;
