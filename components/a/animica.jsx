import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh11izblh.css';
import '../../css/w/w-y4u_k5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dh11izblh"/><path class="w-y4u_k5x"/>`,
		"fallback": "token:animica",
	});
}

export default Component;
