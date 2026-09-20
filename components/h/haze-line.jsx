import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk8e_lbql.css';
import '../../css/k/kkpkbbccb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk8e_lbql"/><path class="kkpkbbccb"/>`,
		"fallback": "mingcute:haze-line",
	});
}

export default Component;
