import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/joe1hwbwe.css';
import '../../css/r/r7dkjv5qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="joe1hwbwe"/><path class="r7dkjv5qk"/></g>`,
		"fallback": "solar:call-chat-rounded-outline",
	});
}

export default Component;
