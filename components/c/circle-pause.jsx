import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0lx5-bvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0lx5-bvb"/>`,
		"fallback": "fa6-regular:circle-pause",
	});
}

export default Component;
