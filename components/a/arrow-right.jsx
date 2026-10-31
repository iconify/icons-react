import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g5_quwb1d.css';
import '../../css/a/aa1drwbuy.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="g5_quwb1d wm-k"/><path class="aa1drwbuy wm-a"/><path class="wcaq-jbkf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:arrow-right",
	});
}

export default Component;
