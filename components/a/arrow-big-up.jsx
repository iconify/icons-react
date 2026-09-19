import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpvk6mmvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpvk6mmvj"/>`,
		"fallback": "boxicons:arrow-big-up",
	});
}

export default Component;
