import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nifwvfbde.css';
import '../../css/v/vx-ffrb6n.css';
import '../../css/q/q3c6h8-rl.css';
import '../../css/s/sh325x39x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nifwvfbde"/><path class="vx-ffrb6n"/><path class="q3c6h8-rl"/><path class="sh325x39x"/></g>`,
		"fallback": "tdesign:cloudy-sunny",
	});
}

export default Component;
