import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sxopz1bdx.css';
import '../../css/j/ji8vkr83b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sxopz1bdx"/><path class="ji8vkr83b"/></g>`,
		"fallback": "gg:align-right",
	});
}

export default Component;
