import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpntfiblm.css';
import '../../css/e/e2d5-ccdw.css';
import '../../css/s/sahhgmcex.css';
import '../../css/y/ycxbyhbyi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpntfiblm"/><path class="e2d5-ccdw"/><path class="sahhgmcex"/><path class="ycxbyhbyi"/>`,
		"fallback": "energy-icons:crutch-20-bold",
	});
}

export default Component;
