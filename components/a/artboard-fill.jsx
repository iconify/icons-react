import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq9vwg0wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq9vwg0wj"/>`,
		"fallback": "ri:artboard-fill",
	});
}

export default Component;
