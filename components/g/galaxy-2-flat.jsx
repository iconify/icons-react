import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2akrpb_k.css';
import '../../css/c/cp18vqh5u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c2akrpb_k"/><path clip-rule="evenodd" class="cp18vqh5u"/></g>`,
		"fallback": "streamline-color:galaxy-2-flat",
	});
}

export default Component;
