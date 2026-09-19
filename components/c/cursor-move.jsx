import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4vm-qbuc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4vm-qbuc"/>`,
		"fallback": "cil:cursor-move",
	});
}

export default Component;
