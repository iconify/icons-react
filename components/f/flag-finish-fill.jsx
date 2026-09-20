import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi6ui8b9b.css';
import '../../css/o/ok5ak5b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pi6ui8b9b"/><path class="ok5ak5b2w"/></g>`,
		"fallback": "lets-icons:flag-finish-fill",
	});
}

export default Component;
