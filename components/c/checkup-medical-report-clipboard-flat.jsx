import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/geeojbb_h.css';
import '../../css/o/oawxm7b3g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="geeojbb_h"/><path class="oawxm7b3g"/></g>`,
		"fallback": "streamline-flex-color:checkup-medical-report-clipboard-flat",
	});
}

export default Component;
