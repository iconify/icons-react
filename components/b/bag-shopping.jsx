import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1b4mfpxj.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1b4mfpxj"/>`,
		"fallback": "fa6-solid:bag-shopping",
	});
}

export default Component;
