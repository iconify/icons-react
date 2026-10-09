import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3wfd7fjc.css';
import '../../css/c/ca1yglwsn.css';
import '../../css/u/ug_y5ht_e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3wfd7fjc"/><path class="ca1yglwsn"/><path class="ug_y5ht_e"/>`,
		"fallback": "energy-icons:electric-van-20-bold",
	});
}

export default Component;
