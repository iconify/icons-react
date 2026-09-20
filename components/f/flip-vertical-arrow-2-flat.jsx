import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mtxddcbjd.css';
import '../../css/w/wj5cavbaq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mtxddcbjd"/><path class="wj5cavbaq"/></g>`,
		"fallback": "streamline-color:flip-vertical-arrow-2-flat",
	});
}

export default Component;
