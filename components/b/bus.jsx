import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0382plgr.css';
import '../../css/f/f59u7ybax.css';
import '../../css/p/pb7-4j_bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i0382plgr"/><path clip-rule="evenodd" class="f59u7ybax"/><path class="pb7-4j_bc"/></g>`,
		"fallback": "majesticons:bus",
	});
}

export default Component;
