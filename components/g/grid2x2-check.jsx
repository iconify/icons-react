import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a48zonvkd.css';
import '../../css/n/n8lroebec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="a48zonvkd"/><path class="n8lroebec"/></g>`,
		"fallback": "hugeicons:grid2x2-check",
	});
}

export default Component;
