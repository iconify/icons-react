import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtrh8db_y.css';
import '../../css/q/qe94_hbwo.css';
import '../../css/c/ceu8rfb7m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtrh8db_y"/><path class="qe94_hbwo"/><path class="ceu8rfb7m"/>`,
		"fallback": "energy-icons:heatwave-20-bold",
	});
}

export default Component;
