import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hw50r1bhi.css';
import '../../css/q/q95augsqe.css';
import '../../css/y/y_wvf86zn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hw50r1bhi"/><path clip-rule="evenodd" class="q95augsqe"/><path class="y_wvf86zn"/></g>`,
		"fallback": "fluent-emoji-flat:heart-hands-dark",
	});
}

export default Component;
