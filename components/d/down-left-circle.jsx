import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a6cozkbuc.css';
import '../../css/q/qh0k1svjh.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a6cozkbuc"/><path class="qh0k1svjh"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:down-left-circle",
	});
}

export default Component;
