import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzwz9qncv.css';
import '../../css/i/ihso0cbar.css';
import '../../css/c/ciqad2-ny.css';
import '../../css/i/i0v6s2jds.css';
import '../../css/l/likc5qhpx.css';
import '../../css/y/ye3iw9bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzwz9qncv wm-k"/><path class="ihso0cbar wm-deco"/><path class="ciqad2-ny wm-k"/><path class="i0v6s2jds wm-k"/><path class="likc5qhpx wm-shadow"/><path class="wm-shine ye3iw9bsg"/></g>`,
		"fallback": "withicons-valentine:file-pdf",
	});
}

export default Component;
