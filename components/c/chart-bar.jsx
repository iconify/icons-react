import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8x1c9bmh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8x1c9bmh"/>`,
		"fallback": "dashicons:chart-bar",
	});
}

export default Component;
