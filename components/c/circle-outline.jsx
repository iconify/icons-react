import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0_1vs7im.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0_1vs7im"/>`,
		"fallback": "carbon:circle-outline",
	});
}

export default Component;
