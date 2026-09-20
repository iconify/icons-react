import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tftuehlxu.css';
import '../../css/e/eluq70bbl.css';
import '../../css/m/mqiw-c5bt.css';
import '../../css/x/x4t2jlkmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tftuehlxu"/><path class="eluq70bbl"/><path class="mqiw-c5bt"/><path class="x4t2jlkmx"/></g>`,
		"fallback": "streamline-freehand-color:calendar-grid",
	});
}

export default Component;
