import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/viceplbup.css';
import '../../css/c/ctahkw1uo.css';
import '../../css/f/fcms4pbek.css';
import '../../css/w/w7x5ohgrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="viceplbup"/><path class="ctahkw1uo"/><path class="fcms4pbek"/><path class="w7x5ohgrp"/></g>`,
		"fallback": "solar:blocks-outline",
	});
}

export default Component;
