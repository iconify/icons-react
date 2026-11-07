import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bfgxkdqwj.css';
import '../../css/k/kdm5jlb9n.css';
import '../../css/a/a0v16pbgz.css';
import '../../css/f/f_-iarb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bfgxkdqwj"/><path class="kdm5jlb9n"/><path class="a0v16pbgz"/><path class="f_-iarb8v"/></g>`,
		"fallback": "solar:cup-paper-broken",
	});
}

export default Component;
