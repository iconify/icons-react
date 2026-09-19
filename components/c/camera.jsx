import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba6xwccra.css';
import '../../css/l/l1u6ybcci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba6xwccra"/><path class="l1u6ybcci"/>`,
		"fallback": "boxicons:camera",
	});
}

export default Component;
