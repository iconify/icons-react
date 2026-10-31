import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n3b30gbra.css';
import '../../css/e/eu8b2vb4n.css';
import '../../css/y/y5lc6pbdp.css';
import '../../css/m/m1ygqmchb.css';
import '../../css/p/p4wel_a7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n3b30gbra wm-shadow"/><path class="eu8b2vb4n wm-shadow"/><path class="y5lc6pbdp"/><path class="m1ygqmchb"/><path class="p4wel_a7z wm-s"/></g>`,
		"fallback": "withicons-brutal:heading-2",
	});
}

export default Component;
