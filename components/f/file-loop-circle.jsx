import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qob048bnv.css';
import '../../css/k/kdpd-tb5o.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qob048bnv"/><path class="kdpd-tb5o"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:file-loop-circle",
	});
}

export default Component;
