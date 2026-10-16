import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9p2ikhel.css';
import '../../css/i/iwxj8-q3t.css';
import '../../css/p/p7p0_0bwx.css';
import '../../css/v/vck4a9blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9p2ikhel"/><path class="iwxj8-q3t"/><rect transform="rotate(-90 7.33 5.59)" class="p7p0_0bwx"/><path class="vck4a9blv"/></g>`,
		"fallback": "andrsrxn:clipboard-sparkle",
	});
}

export default Component;
