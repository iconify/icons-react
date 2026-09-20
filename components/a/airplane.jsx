import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqp4kkbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqp4kkbmm"/>`,
		"fallback": "proicons:airplane",
	});
}

export default Component;
