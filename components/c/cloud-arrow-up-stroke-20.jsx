import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3s1yw0am.css';
import '../../css/h/h0u2-1bxh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3s1yw0am"/><path class="h0u2-1bxh"/>`,
		"fallback": "garden:cloud-arrow-up-stroke-20",
	});
}

export default Component;
