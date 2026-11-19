import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm6qmwb1b.css';
import '../../css/s/s8axfuxxx.css';
import '../../css/z/znrwibbsy.css';
import '../../css/c/cj45a4cra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pm6qmwb1b"/><path class="s8axfuxxx"/><path class="znrwibbsy"/><path class="cj45a4cra"/></g>`,
		"fallback": "andrsrxn:folder-refresh",
	});
}

export default Component;
