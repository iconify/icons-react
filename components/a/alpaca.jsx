import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xhxxx-bly.css';
import '../../css/w/whq25tb6n.css';
import '../../css/y/y_tnpl2qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xhxxx-bly"/><path class="whq25tb6n"/><path class="y_tnpl2qa"/></g>`,
		"fallback": "token:alpaca",
	});
}

export default Component;
