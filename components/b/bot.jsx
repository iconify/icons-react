import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pxn7uxd0b.css';
import '../../css/n/n0viuuyml.css';
import '../../css/m/mfrjwluok.css';
import '../../css/s/s0okuubdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pxn7uxd0b wm-shadow"/><path class="n0viuuyml wm-shadow"/><path class="mfrjwluok"/><path class="s0okuubdh"/></g>`,
		"fallback": "withicons-brutal:bot",
	});
}

export default Component;
