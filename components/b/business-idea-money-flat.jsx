import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zgwddzbfq.css';
import '../../css/d/dsb4p0bsv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zgwddzbfq"/><path class="dsb4p0bsv"/></g>`,
		"fallback": "streamline-color:business-idea-money-flat",
	});
}

export default Component;
