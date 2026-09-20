import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lpzy5_bti.css';
import '../../css/p/puxhiyvvm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lpzy5_bti"/><path class="puxhiyvvm"/></g>`,
		"fallback": "streamline-flex-color:feather-pen-flat",
	});
}

export default Component;
