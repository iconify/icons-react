import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_d-r94pa.css';
import '../../css/f/f0oyr9bzb.css';
import '../../css/l/lmbuvdvtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k_d-r94pa wm-k"/><path class="f0oyr9bzb wm-k"/><path class="lmbuvdvtv wm-k"/></g>`,
		"fallback": "withicons-anime:command",
	});
}

export default Component;
