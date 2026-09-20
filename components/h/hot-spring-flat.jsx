import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ufbpn-bgq.css';
import '../../css/g/g7xjjr-qr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ufbpn-bgq"/><path class="g7xjjr-qr"/></g>`,
		"fallback": "streamline-color:hot-spring-flat",
	});
}

export default Component;
