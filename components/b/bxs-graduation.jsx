import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtvcw1bvs.css';
import '../../css/w/w8cjmh64r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtvcw1bvs"/><path class="w8cjmh64r"/>`,
		"fallback": "bx:bxs-graduation",
	});
}

export default Component;
