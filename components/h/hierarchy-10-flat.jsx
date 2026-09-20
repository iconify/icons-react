import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n6y2a4bmz.css';
import '../../css/i/iki-uu8-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n6y2a4bmz"/><path class="iki-uu8-b"/></g>`,
		"fallback": "streamline-color:hierarchy-10-flat",
	});
}

export default Component;
