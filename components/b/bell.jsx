import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c4s1vdnre.css';
import '../../css/a/aomtykuxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c4s1vdnre"/><path class="aomtykuxf"/></g>`,
		"fallback": "wordpress:bell",
	});
}

export default Component;
