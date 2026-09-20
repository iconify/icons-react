import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a1wlpsb6v.css';
import '../../css/i/ikq3u0m7i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a1wlpsb6v"/><path class="ikq3u0m7i"/></g>`,
		"fallback": "streamline-flex-color:cellular-network-lte-flat",
	});
}

export default Component;
