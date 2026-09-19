import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iopybtbwh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iopybtbwh"/>`,
		"fallback": "cib:creative-commons-sampling-plus",
	});
}

export default Component;
