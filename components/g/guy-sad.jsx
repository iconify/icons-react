import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlj_ihbrk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlj_ihbrk"/>`,
		"fallback": "ps:guy-sad",
	});
}

export default Component;
