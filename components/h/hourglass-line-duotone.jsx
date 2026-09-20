import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jc5bv41eh.css';
import '../../css/s/sexhliewo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jc5bv41eh"/><path class="sexhliewo"/></g>`,
		"fallback": "solar:hourglass-line-duotone",
	});
}

export default Component;
