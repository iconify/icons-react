import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3xgh4b_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3xgh4b_j"/>`,
		"fallback": "fa6-solid:circle-arrow-down",
	});
}

export default Component;
