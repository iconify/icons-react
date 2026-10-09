import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-trq2_bg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-trq2_bg"/>`,
		"fallback": "energy-icons:cloud-snow-48-bold",
	});
}

export default Component;
