import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0c8wpusp.css';
import '../../css/p/p_sre292p.css';
import '../../css/p/pi4848bel.css';
import '../../css/e/e00gi6b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c0c8wpusp wm-shadow"/><path class="p_sre292p wm-shadow"/><path class="pi4848bel"/><path class="e00gi6b_i"/></g>`,
		"fallback": "withicons-brutal:beef",
	});
}

export default Component;
