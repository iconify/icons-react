import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/me4zmhbqc.css';
import '../../css/k/khq3t1zcp.css';
import '../../css/e/erc7edbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="me4zmhbqc"/><path class="khq3t1zcp"/><path class="erc7edbxm"/></g>`,
		"fallback": "streamline-freehand-color:credit-card-visa",
	});
}

export default Component;
