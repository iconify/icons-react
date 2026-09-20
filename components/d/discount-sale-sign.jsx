import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r9yjwnm_s.css';
import '../../css/j/jnz8d1bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r9yjwnm_s"/><path class="jnz8d1bps"/></g>`,
		"fallback": "streamline-freehand-color:discount-sale-sign",
	});
}

export default Component;
