import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmzy6u1qm.css';
import '../../css/i/iya8o4byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmzy6u1qm"/><path class="iya8o4byy"/>`,
		"fallback": "bx:bx-layer-plus",
	});
}

export default Component;
