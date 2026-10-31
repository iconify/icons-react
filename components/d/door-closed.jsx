import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q0vhisb5a.css';
import '../../css/p/p54unnb9b.css';
import '../../css/n/n2xgticbb.css';
import '../../css/u/u13x2gfdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q0vhisb5a wm-shadow"/><path class="p54unnb9b wm-shadow"/><path class="n2xgticbb"/><path class="u13x2gfdm"/></g>`,
		"fallback": "withicons-brutal:door-closed",
	});
}

export default Component;
