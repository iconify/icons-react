import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f0pe0unnb.css';
import '../../css/l/lhmq3gbqs.css';
import '../../css/e/e_r28dbth.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f0pe0unnb"/><path class="lhmq3gbqs"/><path class="e_r28dbth"/></g>`,
		"fallback": "streamline-flex-color:browser-multiple-window-flat",
	});
}

export default Component;
