import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qo5k08mbz.css';
import '../../css/s/svk051m5e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qo5k08mbz"/><path clip-rule="evenodd" class="svk051m5e"/></g>`,
		"fallback": "heroicons:device-phone-mobile-20-solid",
	});
}

export default Component;
