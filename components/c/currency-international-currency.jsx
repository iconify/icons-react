import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/firftsb6m.css';
import '../../css/y/yqgyr3ljy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="firftsb6m"/><path class="yqgyr3ljy"/></g>`,
		"fallback": "streamline-freehand:currency-international-currency",
	});
}

export default Component;
