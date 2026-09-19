import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urqc7bbut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urqc7bbut"/>`,
		"fallback": "cil:brush",
	});
}

export default Component;
