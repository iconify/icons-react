import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r821r0b_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r821r0b_j"/>`,
		"fallback": "fa-solid:envelope",
	});
}

export default Component;
