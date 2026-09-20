import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w_340yi4i.css';
import '../../css/n/n2f03twwq.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w_340yi4i"/><path class="n2f03twwq"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:credit-card-circle",
	});
}

export default Component;
