import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lh2s7ebjn.css';
import '../../css/s/saewjvbbt.css';
import '../../css/g/gp6osvw5g.css';
import '../../css/b/bbbyugbea.css';
import '../../css/j/jge9n2g_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lh2s7ebjn wm-shadow"/><path class="saewjvbbt wm-shadow"/><path class="gp6osvw5g"/><path class="bbbyugbea"/><path class="jge9n2g_p"/></g>`,
		"fallback": "withicons-brutal:camera",
	});
}

export default Component;
