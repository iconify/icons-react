import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5_qjkwwa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5_qjkwwa"/>`,
		"fallback": "zondicons:border-inner",
	});
}

export default Component;
