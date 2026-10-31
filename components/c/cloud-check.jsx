import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hryfoc98u.css';
import '../../css/b/bb5blz89d.css';
import '../../css/c/cka_d9n3y.css';
import '../../css/s/sy15m6baj.css';
import '../../css/z/zdpy6fbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hryfoc98u wm-shadow"/><path class="bb5blz89d wm-shadow"/><path class="cka_d9n3y"/><path class="sy15m6baj"/><path class="wm-s zdpy6fbii"/></g>`,
		"fallback": "withicons-brutal:cloud-check",
	});
}

export default Component;
