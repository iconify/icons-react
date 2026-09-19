import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4ycw1bvi.css';
import '../../css/r/r-n6f1bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4ycw1bvi"/><path class="r-n6f1bae"/>`,
		"fallback": "boxicons:arrow-out-up-right-stroke-square",
	});
}

export default Component;
