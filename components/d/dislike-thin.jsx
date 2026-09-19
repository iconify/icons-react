import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_ty-dq0w.css';
import '../../css/t/tzlpx5vgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_ty-dq0w"/><path class="tzlpx5vgn"/></g>`,
		"fallback": "iconamoon:dislike-thin",
	});
}

export default Component;
