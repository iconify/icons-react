import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5bichbdj.css';
import '../../css/l/lt7-bebau.css';
import '../../css/x/xi61yebtc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p5bichbdj"/><path class="lt7-bebau"/><path class="xi61yebtc"/></g>`,
		"fallback": "fluent-emoji-flat:dvd",
	});
}

export default Component;
