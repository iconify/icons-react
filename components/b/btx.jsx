import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fp1s2kboi.css';
import '../../css/c/caf0fqblc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="fp1s2kboi"/><path class="caf0fqblc"/></g>`,
		"fallback": "cryptocurrency-color:btx",
	});
}

export default Component;
