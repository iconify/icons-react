import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dv2_9kb0e.css';
import '../../css/d/dwjl1ssdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dv2_9kb0e"/><path class="dwjl1ssdq"/></g>`,
		"fallback": "gg:extension",
	});
}

export default Component;
