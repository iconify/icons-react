import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/ww2cuybxm.css';
import '../../css/t/tfqhjqb2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ww2cuybxm"/><path class="tfqhjqb2e"/></g>`,
		"fallback": "streamline-flex-color:color-picker-flat",
	});
}

export default Component;
