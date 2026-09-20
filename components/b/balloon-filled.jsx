import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gvsmm0bfa.css';
import '../../css/i/i6291bvll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gvsmm0bfa"/><path class="i6291bvll"/></g>`,
		"fallback": "tabler:balloon-filled",
	});
}

export default Component;
