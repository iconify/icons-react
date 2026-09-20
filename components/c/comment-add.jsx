import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1o6n8b-r.css';
import '../../css/v/vf676cmfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1o6n8b-r"/><path clip-rule="evenodd" class="vf676cmfn"/></g>`,
		"fallback": "proicons:comment-add",
	});
}

export default Component;
