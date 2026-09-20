import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/coa9b7bdt.css';
import '../../css/k/kk4uieu0r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="coa9b7bdt"/><path class="kk4uieu0r"/></g>`,
		"fallback": "streamline-color:cloud-gaming-1-flat",
	});
}

export default Component;
