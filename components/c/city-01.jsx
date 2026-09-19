import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tysl7ubvg.css';
import '../../css/p/pytdb1oyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tysl7ubvg"/><path class="pytdb1oyx"/></g>`,
		"fallback": "hugeicons:city-01",
	});
}

export default Component;
