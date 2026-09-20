import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgsrazb5x.css';
import '../../css/e/ee5gr6bsf.css';
import '../../css/s/slr422bsv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mgsrazb5x"/><path class="ee5gr6bsf"/><path class="slr422bsv"/></g>`,
		"fallback": "streamline-color:hearing-deaf-2",
	});
}

export default Component;
