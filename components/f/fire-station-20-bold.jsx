import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prssdsbsb.css';
import '../../css/p/p90oggben.css';
import '../../css/i/i59ju7bdr.css';
import '../../css/y/y77ro9r-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prssdsbsb"/><path class="p90oggben"/><path class="i59ju7bdr"/><path class="y77ro9r-x"/>`,
		"fallback": "energy-icons:fire-station-20-bold",
	});
}

export default Component;
