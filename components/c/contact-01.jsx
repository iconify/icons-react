import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y0djph_hu.css';
import '../../css/b/b51061zzw.css';
import '../../css/j/j9d1q1wok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="y0djph_hu"/><path class="b51061zzw"/><path class="j9d1q1wok"/></g>`,
		"fallback": "hugeicons:contact-01",
	});
}

export default Component;
