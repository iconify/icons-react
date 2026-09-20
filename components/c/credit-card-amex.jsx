import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c0oy8dkdn.css';
import '../../css/d/drd72bj7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c0oy8dkdn"/><path class="drd72bj7c"/></g>`,
		"fallback": "streamline-freehand-color:credit-card-amex",
	});
}

export default Component;
