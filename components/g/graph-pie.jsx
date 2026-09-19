import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvgtklzub.css';
import '../../css/r/rcy948b8o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvgtklzub"/><path class="rcy948b8o"/>`,
		"fallback": "foundation:graph-pie",
	});
}

export default Component;
