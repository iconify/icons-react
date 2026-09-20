import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zvsc72edy.css';
import '../../css/x/xga56bcto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zvsc72edy"/><path class="xga56bcto"/></g>`,
		"fallback": "streamline-sharp-color:critical-thinking-2-flat",
	});
}

export default Component;
