import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydt23sbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydt23sbnc"/>`,
		"fallback": "boxicons:cloud-rain-wind-alt",
	});
}

export default Component;
