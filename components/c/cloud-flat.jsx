import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/deymt3vdm.css';
import '../../css/v/v0lc5bb3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="deymt3vdm"/><path class="v0lc5bb3y"/></g>`,
		"fallback": "streamline-flex-color:cloud-flat",
	});
}

export default Component;
