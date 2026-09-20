import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mh17155qp.css';
import '../../css/w/wki-6wbmz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mh17155qp"/><path class="wki-6wbmz"/></g>`,
		"fallback": "streamline-color:electric-cord-3-flat",
	});
}

export default Component;
