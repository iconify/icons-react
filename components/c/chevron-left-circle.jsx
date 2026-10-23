import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3t99xblo.css';
import '../../css/l/ly1zmygua.css';
import '../../css/k/k_gtu_bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o3t99xblo"/><path class="ly1zmygua"/><path class="k_gtu_bxt"/></g>`,
		"fallback": "andrsrxn:chevron-left-circle",
	});
}

export default Component;
