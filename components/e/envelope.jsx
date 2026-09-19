import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5svpcbni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5svpcbni"/>`,
		"fallback": "fa6-solid:envelope",
	});
}

export default Component;
