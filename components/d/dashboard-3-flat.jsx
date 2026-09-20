import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lyvgkurko.css';
import '../../css/c/cxvx_ubwx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lyvgkurko"/><path class="cxvx_ubwx"/></g>`,
		"fallback": "streamline-flex-color:dashboard-3-flat",
	});
}

export default Component;
