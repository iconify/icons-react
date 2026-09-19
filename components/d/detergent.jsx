import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vd4n9fb_s.css';
import '../../css/j/jmscrwabz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vd4n9fb_s"/><path class="jmscrwabz"/></g>`,
		"fallback": "hugeicons:detergent",
	});
}

export default Component;
