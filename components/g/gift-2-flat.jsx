import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fyirgbi5v.css';
import '../../css/z/zvlweubvr.css';
import '../../css/u/ubel4_bjc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fyirgbi5v"/><path class="zvlweubvr"/><path class="ubel4_bjc"/></g>`,
		"fallback": "streamline-flex-color:gift-2-flat",
	});
}

export default Component;
