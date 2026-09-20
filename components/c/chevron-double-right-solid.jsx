import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p1nd76bkx.css';
import '../../css/v/vjy-9-tlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p1nd76bkx"/><path class="vjy-9-tlm"/></g>`,
		"fallback": "stash:chevron-double-right-solid",
	});
}

export default Component;
