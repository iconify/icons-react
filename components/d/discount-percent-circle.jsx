import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-83soh2y.css';
import '../../css/f/fskncgbdf.css';
import '../../css/w/wd40hk6wu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-83soh2y"/><path class="fskncgbdf"/><path class="wd40hk6wu"/></g>`,
		"fallback": "streamline-color:discount-percent-circle",
	});
}

export default Component;
