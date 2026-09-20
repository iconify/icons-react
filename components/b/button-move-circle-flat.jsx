import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qhsogxb3b.css';
import '../../css/k/k0--l3azd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qhsogxb3b"/><path class="k0--l3azd"/></g>`,
		"fallback": "streamline-flex-color:button-move-circle-flat",
	});
}

export default Component;
