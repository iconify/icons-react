import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zc4pwacxv.css';
import '../../css/z/zlb7f_b-f.css';
import '../../css/w/wh5rpxx5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zc4pwacxv"/><path class="zlb7f_b-f"/><path class="wh5rpxx5e"/></g>`,
		"fallback": "streamline-ultimate:content-ink-pen-write",
	});
}

export default Component;
