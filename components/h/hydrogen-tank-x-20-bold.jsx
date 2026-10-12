import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmp_5zpfe.css';
import '../../css/j/jj7ew2vkc.css';
import '../../css/p/pcks-v67p.css';
import '../../css/e/e54bjx_0d.css';
import '../../css/l/l3qindbue.css';
import '../../css/f/fdtytm4ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmp_5zpfe"/><path class="jj7ew2vkc"/><path class="pcks-v67p"/><path class="e54bjx_0d"/><path class="l3qindbue"/><path class="fdtytm4ox"/>`,
		"fallback": "energy-icons:hydrogen-tank-x-20-bold",
	});
}

export default Component;
