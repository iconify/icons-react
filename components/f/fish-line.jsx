import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqj7ss4gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqj7ss4gh"/>`,
		"fallback": "mingcute:fish-line",
	});
}

export default Component;
