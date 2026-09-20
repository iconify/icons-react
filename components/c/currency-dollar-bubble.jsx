import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lm_9o2bbh.css';
import '../../css/b/bkq5i0b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lm_9o2bbh"/><path class="bkq5i0b-o"/></g>`,
		"fallback": "streamline-freehand-color:currency-dollar-bubble",
	});
}

export default Component;
