import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/up7l3j34q.css';
import '../../css/a/a2di1n8hu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="up7l3j34q"/><path class="a2di1n8hu"/></g>`,
		"fallback": "streamline-color:cloud-data-transfer-flat",
	});
}

export default Component;
