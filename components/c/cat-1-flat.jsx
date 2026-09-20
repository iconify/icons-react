import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yoi8k34ot.css';
import '../../css/w/whcb64ngu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yoi8k34ot"/><path class="whcb64ngu"/></g>`,
		"fallback": "streamline-color:cat-1-flat",
	});
}

export default Component;
