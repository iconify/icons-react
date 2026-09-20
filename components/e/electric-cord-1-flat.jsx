import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x5v3f1fut.css';
import '../../css/b/b1y45jbpd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x5v3f1fut"/><path class="b1y45jbpd"/></g>`,
		"fallback": "streamline-flex-color:electric-cord-1-flat",
	});
}

export default Component;
