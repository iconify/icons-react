import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9t0g5brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9t0g5brs"/>`,
		"fallback": "solar:graph-bold",
	});
}

export default Component;
