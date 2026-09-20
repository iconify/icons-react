import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxphk2e7j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxphk2e7j"/>`,
		"fallback": "la:camera-retro-solid",
	});
}

export default Component;
