import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8b32nb0z.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8b32nb0z"/>`,
		"fallback": "fa6-solid:arrow-trend-down",
	});
}

export default Component;
