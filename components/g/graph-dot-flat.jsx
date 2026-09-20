import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wlis-_lcb.css';
import '../../css/h/hthvg1mfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wlis-_lcb"/><path class="hthvg1mfq"/></g>`,
		"fallback": "streamline-sharp-color:graph-dot-flat",
	});
}

export default Component;
