import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dvz55bbxk.css';
import '../../css/t/tcl4vzbmr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dvz55bbxk"/><path class="tcl4vzbmr"/></g>`,
		"fallback": "streamline:inbox-lock-solid",
	});
}

export default Component;
