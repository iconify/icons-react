import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rc9w7j-cg.css';
import '../../css/b/b4736zooy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rc9w7j-cg"/><path class="b4736zooy wm-a"/></g>`,
		"fallback": "withicons:bot-solid",
	});
}

export default Component;
