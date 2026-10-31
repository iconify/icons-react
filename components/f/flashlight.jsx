import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ihhuy1bah.css';
import '../../css/r/rhm6wmbpy.css';
import '../../css/l/lj3-5cbae.css';
import '../../css/c/c3atbbrac.css';
import '../../css/k/kic-dzbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ihhuy1bah wm-shadow"/><path class="rhm6wmbpy wm-shadow"/><path class="lj3-5cbae"/><path class="c3atbbrac"/><path class="kic-dzbsm wm-s"/></g>`,
		"fallback": "withicons-brutal:flashlight",
	});
}

export default Component;
