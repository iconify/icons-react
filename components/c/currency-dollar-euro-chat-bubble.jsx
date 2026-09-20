import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bcvnhpbyg.css';
import '../../css/f/fv2_489ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bcvnhpbyg"/><path class="fv2_489ns"/></g>`,
		"fallback": "streamline-freehand:currency-dollar-euro-chat-bubble",
	});
}

export default Component;
