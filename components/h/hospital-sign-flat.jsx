import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hrv8tdbbr.css';
import '../../css/x/x8eg2omve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hrv8tdbbr"/><path class="x8eg2omve"/></g>`,
		"fallback": "streamline-flex-color:hospital-sign-flat",
	});
}

export default Component;
