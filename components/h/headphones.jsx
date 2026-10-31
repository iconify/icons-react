import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nionbebtx.css';
import '../../css/o/o1ymgumjk.css';
import '../../css/i/i2fe2xbeg.css';
import '../../css/z/zpikw17us.css';
import '../../css/u/u25kwdbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nionbebtx wm-shadow"/><path class="o1ymgumjk wm-shadow"/><path class="i2fe2xbeg"/><path class="zpikw17us"/><path class="u25kwdbxx"/></g>`,
		"fallback": "withicons-brutal:headphones",
	});
}

export default Component;
