import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gzjgc_t0q.css';
import '../../css/f/f_gnwzb8z.css';
import '../../css/t/t-007b-3c.css';
import '../../css/f/fx38fz2eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gzjgc_t0q"/><path class="f_gnwzb8z"/><path class="t-007b-3c"/><path class="fx38fz2eg"/></g>`,
		"fallback": "solar:book-linear",
	});
}

export default Component;
