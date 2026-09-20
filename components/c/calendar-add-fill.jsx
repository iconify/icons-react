import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyl-ddcwz.css';
import '../../css/a/a-wvml5ct.css';
import '../../css/e/e4ii85bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uyl-ddcwz"/><path clip-rule="evenodd" class="a-wvml5ct"/><path class="e4ii85bpa"/></g>`,
		"fallback": "lets-icons:calendar-add-fill",
	});
}

export default Component;
