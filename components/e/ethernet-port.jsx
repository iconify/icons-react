import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yh3akfble.css';
import '../../css/u/u71cl9b3r.css';
import '../../css/q/q0x2jbcmi.css';
import '../../css/n/n3byo_bxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yh3akfble"/><path class="u71cl9b3r wm-shadow"/><path class="q0x2jbcmi"/><path class="n3byo_bxm"/></g>`,
		"fallback": "withicons-brutal:ethernet-port",
	});
}

export default Component;
