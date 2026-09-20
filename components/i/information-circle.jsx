import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-83soh2y.css';
import '../../css/v/v0uxhdcsc.css';
import '../../css/r/r-r402bdt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-83soh2y"/><path class="v0uxhdcsc"/><path class="r-r402bdt"/></g>`,
		"fallback": "streamline-color:information-circle",
	});
}

export default Component;
