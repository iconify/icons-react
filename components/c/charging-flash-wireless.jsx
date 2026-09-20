import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mg5jbrv_g.css';
import '../../css/g/gw-1t5ojh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mg5jbrv_g"/><path class="gw-1t5ojh"/></g>`,
		"fallback": "streamline-freehand:charging-flash-wireless",
	});
}

export default Component;
