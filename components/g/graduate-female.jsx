import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpgfzqb3v.css';
import '../../css/i/ikggwcc8e.css';
import '../../css/f/f7dmo3z5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kpgfzqb3v"/><path class="ikggwcc8e"/><path class="f7dmo3z5c"/></g>`,
		"fallback": "hugeicons:graduate-female",
	});
}

export default Component;
