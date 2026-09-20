import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cq_ni60vz.css';
import '../../css/x/x4ykvmbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cq_ni60vz"/><path class="x4ykvmbfe"/></g>`,
		"fallback": "streamline-sharp-color:box-waterproof-flat",
	});
}

export default Component;
