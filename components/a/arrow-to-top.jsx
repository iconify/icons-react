import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4-6_2nty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4-6_2nty"/>`,
		"fallback": "boxicons:arrow-to-top",
	});
}

export default Component;
