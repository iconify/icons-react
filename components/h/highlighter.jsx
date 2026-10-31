import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/es3m-tj7e.css';
import '../../css/v/vpiwnzbbz.css';
import '../../css/s/sv0an_bax.css';
import '../../css/m/m791eijcl.css';
import '../../css/f/fx4dcjfmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="es3m-tj7e wm-shadow"/><path class="vpiwnzbbz wm-shadow"/><path class="sv0an_bax"/><path class="m791eijcl"/><path class="fx4dcjfmp"/></g>`,
		"fallback": "withicons-brutal:highlighter",
	});
}

export default Component;
