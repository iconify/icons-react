import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b_d4bjbgs.css';
import '../../css/s/sb_klxb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b_d4bjbgs"/><path class="sb_klxb4y"/></g>`,
		"fallback": "stash:chevron-double-up-light",
	});
}

export default Component;
