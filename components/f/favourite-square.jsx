import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/uq-sejb9b.css';
import '../../css/e/elri-647y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="uq-sejb9b"/><path class="elri-647y"/></g>`,
		"fallback": "hugeicons:favourite-square",
	});
}

export default Component;
