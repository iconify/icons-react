import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/ketgzibwl.css';
import '../../css/q/qeti59buh.css';
import '../../css/x/xqwhzubqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ketgzibwl"/><path class="qeti59buh"/><path class="xqwhzubqv"/></g>`,
		"fallback": "streamline-sharp-color:cashier-machine-2-flat",
	});
}

export default Component;
