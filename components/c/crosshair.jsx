import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rawx_4jhd.css';
import '../../css/t/tu0nkzb6s.css';
import '../../css/p/py3r1nbdl.css';
import '../../css/c/ct1pmlklf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rawx_4jhd wm-shadow"/><path class="tu0nkzb6s wm-shadow"/><path class="py3r1nbdl"/><path class="ct1pmlklf"/></g>`,
		"fallback": "withicons-brutal:crosshair",
	});
}

export default Component;
