import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmdfc925f.css';
import '../../css/u/uwyvjbe5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmdfc925f"/><path class="uwyvjbe5r"/></g>`,
		"fallback": "iconamoon:delivery-free-thin",
	});
}

export default Component;
