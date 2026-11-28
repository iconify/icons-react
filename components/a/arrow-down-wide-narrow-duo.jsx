import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/llap4kbyg.css';
import '../../css/c/ck_7e7hfa.css';
import '../../css/v/vt1ae2bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="llap4kbyg"/><path class="ck_7e7hfa"/><path class="vt1ae2bts"/></g>`,
		"fallback": "iconaut:arrow-down-wide-narrow-duo",
	});
}

export default Component;
