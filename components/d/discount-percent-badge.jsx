import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y78n41bnv.css';
import '../../css/x/xkk34h5my.css';
import '../../css/o/o1gg3kbme.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y78n41bnv"/><path class="xkk34h5my"/><path class="o1gg3kbme"/></g>`,
		"fallback": "streamline-color:discount-percent-badge",
	});
}

export default Component;
