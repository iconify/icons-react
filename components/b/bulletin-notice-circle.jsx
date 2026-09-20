import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vicjo5y-h.css';
import '../../css/n/nwuq_h5kq.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vicjo5y-h"/><path class="nwuq_h5kq"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:bulletin-notice-circle",
	});
}

export default Component;
