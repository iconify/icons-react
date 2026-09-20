import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erxv7gxee.css';
import '../../css/m/mpm62gb7s.css';
import '../../css/k/kt1_i_bds.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erxv7gxee"/><path class="mpm62gb7s"/><path class="kt1_i_bds"/>`,
		"fallback": "openmoji:egg",
	});
}

export default Component;
