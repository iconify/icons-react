import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zlynffbnc.css';
import '../../css/g/g5ly26brs.css';
import '../../css/j/jii3o3xoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zlynffbnc"/><path class="g5ly26brs"/><path class="jii3o3xoc"/></g>`,
		"fallback": "streamline-sharp:blood-bag-donation",
	});
}

export default Component;
