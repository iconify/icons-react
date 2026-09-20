import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r7uirtbqq.css';
import '../../css/z/zu3o5j6at.css';
import '../../css/x/x_ryngbas.css';
import '../../css/p/p0k_gwbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r7uirtbqq"/><path class="zu3o5j6at"/><path class="x_ryngbas"/><path class="p0k_gwbnv"/></g>`,
		"fallback": "streamline-freehand:help-headphones-customer-support-human",
	});
}

export default Component;
