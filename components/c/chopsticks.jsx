import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r0a2tab4c.css';
import '../../css/q/qvr8eqb-m.css';
import '../../css/g/gnutxejdv.css';
import '../../css/u/u5r21yh2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="r0a2tab4c wm-shadow"/><path class="qvr8eqb-m wm-shadow"/><path class="gnutxejdv"/><path class="u5r21yh2x"/></g>`,
		"fallback": "withicons-brutal:chopsticks",
	});
}

export default Component;
