import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/johcinb0t.css';
import '../../css/v/vgbrn8b-p.css';
import '../../css/f/fxsj7--8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="johcinb0t wm-shadow"/><path class="vgbrn8b-p wm-shadow"/><path class="fxsj7--8x"/></g>`,
		"fallback": "withicons-brutal:indent-increase",
	});
}

export default Component;
