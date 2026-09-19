import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s5_q-ubrp.css';
import '../../css/t/tbm51rejq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s5_q-ubrp"/><path class="tbm51rejq"/></g>`,
		"fallback": "heroicons:inbox-arrow-down-solid",
	});
}

export default Component;
