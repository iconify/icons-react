import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svjm3hclv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svjm3hclv"/>`,
		"fallback": "mi:circle-arrow-up",
	});
}

export default Component;
