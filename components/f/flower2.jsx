import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/em3t5sb7h.css';
import '../../css/n/nisesvbkm.css';
import '../../css/g/gfnze9uwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="em3t5sb7h"/><path class="nisesvbkm"/><path class="gfnze9uwc"/></g>`,
		"fallback": "hugeicons:flower2",
	});
}

export default Component;
