import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0l-9ccvq.css';
import '../../css/f/fwsfaab3d.css';
import '../../css/s/s2kt08-pn.css';
import '../../css/p/p099wp7tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k y0l-9ccvq"/><path class="fwsfaab3d wm-k"/><path class="s2kt08-pn wm-k"/><path class="p099wp7tq wm-shine"/></g>`,
		"fallback": "withicons-anime:corner-down-left",
	});
}

export default Component;
