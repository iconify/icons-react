import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv4va0_8o.css';
import '../../css/n/nl5ridb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv4va0_8o"/><path class="nl5ridb9g"/>`,
		"fallback": "mingcute:gradienter-line",
	});
}

export default Component;
