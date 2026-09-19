import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni-6x9bji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni-6x9bji"/>`,
		"fallback": "cil:cloud",
	});
}

export default Component;
