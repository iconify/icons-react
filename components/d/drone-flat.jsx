import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fz5mlfa2u.css';
import '../../css/j/jdbl7utrz.css';
import '../../css/e/e25jo1u6y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fz5mlfa2u"/><path class="jdbl7utrz"/><path class="e25jo1u6y"/></g>`,
		"fallback": "streamline-color:drone-flat",
	});
}

export default Component;
