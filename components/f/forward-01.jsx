import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kwx-zfbpo.css';
import '../../css/w/wx8-527tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kwx-zfbpo"/><path class="wx8-527tv"/></g>`,
		"fallback": "hugeicons:forward-01",
	});
}

export default Component;
