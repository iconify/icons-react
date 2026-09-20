import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef9d5u_yc.css';
import '../../css/f/f-0v3hb_f.css';
import '../../css/p/phxh88geo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ef9d5u_yc"/><path class="f-0v3hb_f"/><path class="phxh88geo"/></g>`,
		"fallback": "streamline-freehand-color:design-tool-pen-brush-cup",
	});
}

export default Component;
