import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk-i6tmrv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk-i6tmrv"/>`,
		"fallback": "zondicons:camera",
	});
}

export default Component;
